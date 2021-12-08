import CardNews from "./CardNews";
import styles from "../../styles/news.module.css";

const NewsContainer = ({ news }) => {

    return (
        <div>
        	{
        		news?.length > 0 && (                

                    <div className={styles.grid_cards}>
                        {news.map((article,index) => (
                            <CardNews key={article.title} article={article} />
                        ))}
                    </div>

        			)
        	}
        </div>
    );
};

export default NewsContainer;
