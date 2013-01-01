import { useState, useEffect, useContext } from "react";

import Layout from "../components/layout/Layout";
import CardNews from "./../components/news/CardNews";
import Title from "./../components/ui/Title";
import styles from "../styles/news.module.css";
import useGetNews from "../hooks/useGetNews";

export default function Business() {

   const [news, loading, error] = useGetNews('business');

    return (
        <div>
           <Title title='LTNews | Business' />

            <Layout>
            {
                loading ? (<h3>Loading...</h3>) : 

                (
                    <div className={styles.grid_cards}>
                    {news.map(
                        (_new, i) =>
                            i < 20 && (
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
