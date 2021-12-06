import Image from "next/image";
import React from "react";
import styles from "../../styles/news.module.css";

const CardNews = ({ article }) => {
    return (
        <article className={styles.card}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
                <Image src={article.urlToImage} width={300} height={300}/>
            </a>
            <small>{article.source}</small>
            <a
                href={article.url}
                target="_blank"
                rel="noopener  eact noreferrer"
                className={styles.card_title}
            >
                {article.title}
            </a>
        </article>
    );
};
export default CardNews;

