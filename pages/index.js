import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";

import Layout from "../components/layout/Layout";
import CardNews from "./../components/news/CardNews";

import styles from "../styles/news.module.css";
import { context } from "./../context/AppProvider";

import getNews from "./../helpers/getNews";

export default function Home() {

    const {category, setCategory} = useContext(context);    
    const [loading, setLoading] = useState(false);    
    const [news, setNews] = useState([]);

    useEffect(() => {
        setLoading(true);
         getNews({category}).then(resp=>{
            if(!!resp){
                setNews(resp);
            }
            setLoading(false);
         })
        
    }, [category]);

    return (
        <div>
            <Head>
                <title>LT News </title>
                <meta name="description" content="web site of news" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
            {
                loading ? (<h3>Loading...</h3>) : 

                (
                    <div className={styles.grid_cards}>
                    {news.map(
                        (_new, i) =>
                            i < 10 && (
                                <CardNews key={_new.title} article={_new} />
                            )
                    )}
                </div>
                ) 
            }
                
            </Layout>
        </div>
    );
}
