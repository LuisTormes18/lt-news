import { Head } from "next/head";
import NewsContainer from "../../components/news/NewsContainer";

export default function Search({ news, search }) {
    return (
        <>
            <Head>
                <title>You searched for {search} | LTNews </title>
                <meta name="description" content="web site of news" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NewsContainer news={news} />
        </>
    );
}
Search.getInitialProps = async (props) => {
    let news = [];
    const result = await fetch(
        `http://localhost:3000/api/news/search?${props.query.q}`
    );
    const data = await result.json();

    data.ok && (news = data.news);

    return {
        props: {
            news,
            search: props.query.q,
        },
        revalidate: 1,
    };
};

// <h2>The total number of results : {news.length + 1}</h2>
