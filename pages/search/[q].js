import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import Layout from "./../../components/layout/Layout";
import CardNews from "./../../components/news/CardNews";
import Title from "../../components/ui/Title";
import styles from "../../styles/news.module.css";
import useGetNews from "../../hooks/useGetNews";

export default function Sports() {

   const router = useRouter();
   const [news, loading, error, totalResults] = useGetNews(router.query.q);


    return (
        <div>
           <Title title={`You searched for ${router.query.q} | LTNews`} />

            <Layout>
            {
                loading ? (
                    <h3>Loading...</h3>

                    ) : 

                (

                  <>
                  <h2>Total Results from {router.query.q} : { totalResults }</h2>

                    <div className={styles.grid_cards}>
                    {news.map(
                        (article, i) =>
                          
                                (<CardNews key={article.title} article={article} />)
                    )}
                </div>


                  </>
                ) 
            }
                
            </Layout>
        </div>
    );
}

// <h2>The total number of results : {news.length + 1}</h2>
