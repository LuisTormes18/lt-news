import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import Layout from "../../components/layout/Layout";
import CardNews from "../../components/news/CardNews";

import styles from "../../styles/news.module.css";

const article = () => {

    const { query } = useRouter();
    const router = useRouter();
    console.log(router)
    const [loading, setLoading] = useState(false);    

    return (
        <div>
            <Head>
                <title>LT News </title>
                <meta name="description" content={`LTNews ${query.id}` } />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
            
                <h1>{query.id}</h1>

            </Layout>
        </div>
    )
}

export default article

// {
//                 loading ? (<h3>Loading...</h3>) : (<h1>{query.id}</h1>) 
//             }