import Title from "./../../components/ui/Title";

import { categories } from "../../const/const";
import NewsContainer from "../../components/news/NewsContainer";

const Category = ({ news }) => {
    return (
        <div>
            {/* <Title title={`LTNews | ${query.category}`} /> */}
            <NewsContainer news={news} />
        </div>
    );
};

Category.getInitialProps = async (props) => {
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

export default Category;
