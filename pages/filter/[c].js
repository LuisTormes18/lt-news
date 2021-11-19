import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";

import Layout from "../../components/layout/Layout";
import CardNews from "../../components/news/CardNews";

import styles from "../../styles/news.module.css";
import { context } from "../../context/AppProvider";

export default function Category() {
    const { query } = useRouter();

    const [category, setCategory] = useState(query.c);    
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function getNews() {
            const from = query.from;
            const to = query?.to || query.from;
            const api_key = "16e193285c7446b5b781eedad21c6d24";
            const url = `https://newsapi.org/v2/everything?q=${category}&from=${from}&to=${to}&sortBy=popularity&apiKey=${api_key}`;
            try {
                const resp = await fetch(url);
                const data = await resp.json();

                if (data.status === "ok") {
                    setNews(data.articles);
                } else {
                    console.log(data.error);
                }
            } catch (error) {
                console.log(error);
            }
     }
        getNews();
    }, [category]);

    return (
        <div>
            <Head>
                <title>LT News </title>
                <meta name="description" content="web site of news" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div className={styles.grid_cards}>
                    {news.map(
                        (_new, i) =>
                            i < 10 && (
                                <CardNews key={_new.title} article={_new} />
                            )
                    )}
                </div>
            </Layout>
        </div>
    );
}
