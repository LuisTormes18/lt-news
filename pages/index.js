import { Head } from "next/head";
import NewsContainer from "./../components/news/NewsContainer";

export default function Home({ news }) {
    return (
        <>
            <Head>
                <title>LTNews </title>
                <meta name="description" content="web site of news" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NewsContainer news={news} />
        </>
    );
}
export async function getStaticProps() {
    let news = [];
    const result = await fetch("http://localhost:3000/api/news");
    const data = await result.json();

    data.ok && (news = data.news);

    return {
        props: {
            news,
        },
        revalidate: 1,
    };
}
