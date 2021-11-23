import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import Layout from "./../../components/layout/Layout";
import CardNews from "./../../components/news/CardNews";
import Title from "../../components/ui/Title";
import styles from "../../styles/news.module.css";
import useGetNews from "../../hooks/useGetNews";

export default function Sports() {

   const router = useRouter();
   const [news, loading, error] = useGetNews(null, router.query.q);


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

<h2>The total number of results : {news.length + 1}</h2>

                    <div className={styles.grid_cards}>
                    {news.map(
                        (_new, i) =>
                            i < 20 && (
                                <CardNews key={_new.title} article={_new} />
                            )
                    )}
                </div>


                  </>
                ) 
            }
                
            </Layout>
        </div>
    );
}
