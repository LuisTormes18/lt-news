import React from "react";
import styles from "../../styles/news.module.css";

const CardNews = ({ article }) => {
    return (
        <div className={styles.card}>
            <h2> {article.title} </h2>
            {/* <h2> {article.author} </h2> */}
            {/* <p>{article.content}</p> */}
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
            <a href={article.url}>{article.url}</a>

        </div>
    );
};
export default CardNews;
