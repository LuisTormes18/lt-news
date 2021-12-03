import Head from "next/head";
import { useRouter } from 'next/router';
import NewsContainer from "../../components/news/NewsContainer";
import useGetNews from '../../hooks/useGetNews';

export default function Search() {
    const router = useRouter();
    const { q } = router.query;



    const [news, loading] = useGetNews(q);

    return (
        <>
            <Head>
                <title>You searched for {q} | LTNews </title>
                <meta name="description" content="web site of news" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className='title-category'>You searched for {q}</h1>
             {  
                loading ? ( <h1>Loading...</h1> ) : (<NewsContainer news={news} />)
             }
        </>
    );
}

