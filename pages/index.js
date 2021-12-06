import Head from "next/head";
import NewsContainer from "./../components/news/NewsContainer";
import Loading from "../components/ui/Loading";
import useGetNews from "../hooks/useGetNews";

export default function Home() {
    const [news, loading] = useGetNews();

    return (
        <div>
            <Head>
                <title>LTNews </title>
                <meta name="description" content="web site of news" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {loading ? <Loading /> : <NewsContainer news={news} />}
        </div>
    );
}
