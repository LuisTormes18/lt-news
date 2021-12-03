import CardNews from "./CardNews";
import styles from "../../styles/news.module.css";

const NewsContainer = ({ news }) => {
    return (
        <div>
            <div className={styles.grid_cards}>
                {news?.map((article) => (
                    <CardNews key={article.title} article={article} />
                ))}
            </div>
        </div>
    );
};

export default NewsContainer;
