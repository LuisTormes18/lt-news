
import Head from "next/head";
import { useRouter } from 'next/router';

import NewsContainer from "../components/news/NewsContainer";
import { categories } from '../const/const';
import useGetNews from '../hooks/useGetNews';

const Category = () => {

    const router = useRouter();
    const { category } = router.query;


    // evaluar si la catgorya es valida y si no lo es retornar un error 404

    if(!categories.includes(category)){
        return <h1>Error 404</h1>
    }

    const [news, loading] = useGetNews(category);

    return (
        <div>
         <Head>
                <title>LTNews | { category } </title>
                <meta name="description" content="web site of news" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className='title-category'>{category}</h1>
            {  
                loading ? ( <h1>Loading...</h1> ) : (<NewsContainer news={news} />)
             }
            

        </div>
    );
};

export default Category;

