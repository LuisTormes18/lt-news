import Title from "../components/ui/Title";

import NewsContainer from "../components/news/NewsContainer";

const Category = ({ news }) => {
    return (
        <div>
            {/* <Title title={`LTNews | ${query.category}`} /> */}
            <NewsContainer news={news} />
        </div>
    );
};

Category.getInitialProps = async (props) => {
    let news = [];
    const result = await fetch(`http://localhost:3000/api/news/by_category?${props.query.category}`);
    const data = await result.json();

    data.ok && (news = data.news);

    return {
        props: {
            news,
        },
        revalidate: 1,
    };
};

export default Category;
