import Head from "next/head";
import NewsContainer from "./../components/news/NewsContainer";
import useGetNews from '../hooks/useGetNews';

export default function Home() {
    const [news, loading] = useGetNews();

    return (
         <div>
            <Head>
                <title>LTNews </title>
                <meta name="description" content="web site of news" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {  
                loading ? ( <h1>Loading...</h1> ) : (<NewsContainer news={news} />)
             }
            
        </div>
    );
}

