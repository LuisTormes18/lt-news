import { useEffect } from 'react';
import { useRouter} from 'next/router';

import CardNews from "../../components/news/CardNews";
import Title from "./../../components/ui/Title";
import styles from "../../styles/news.module.css";
import useGetNews from "../../hooks/useGetNews";
import { validarFecha } from "../../utils/utils";

import { categories } from "../../const/const";

const Category = () => {

	const router = useRouter();
    const { query } = router;

    console.log(query);
    const [news, loading, error] = useGetNews(query.category);



    useEffect(() => {

        // if(!validarFecha(query.date)){

        //   console.log(query.date,'no existe');

        // }
            
        if(!categories.includes(query.category)){

            console.log(query.category,'no existe');

            router.push('/');
            // return ;  
        }



    }, [query])


    return (
        <div>
           <Title title={`LTNews | ${ query.category }`} />

            {
                loading ? (<h3>Loading...</h3>) : 

                (
                    <div className={styles.grid_cards}>
                    {news?.map(
                        (_new, i) =>
                            (
                                <CardNews key={_new.title} article={_new} />
                            )
                    )}
                </div>
                ) 
            }
                
        </div>
    );
}

export default Category