import Title from "../../components/ui/Title";
import NewsContainer from "../../components/news/NewsContainer";

export default function Search({ news }) {
    return (
        <div>
            {/* <Title title={`You searched for ${router.query.q} | LTNews`} /> */}

            <NewsContainer news={news} />
        </div>
    );
}
Search.getInitialProps = async (props) => {
    const key = process.env.NEXT_PUBLIC_API_KEY;
    let news = [];

    try {
        const res = await fetch(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}`
        );
        const data = await res.json();

        news = data.response.docs.map((article) => {
            return {
                title: article.headline.main,
                description: article.abstract,
                url: article.web_url,
                urlToImage: `https://www.nytimes.com/${article.multimedia[0]?.url}`,
                source: article.source,
                date: article.pub_date,
                id: article._id,
            };
        });
    } catch (err) {
        console.log(err);
    }

    return {
        props: { news },
        revalidate: 1,
    };
};

// <h2>The total number of results : {news.length + 1}</h2>
