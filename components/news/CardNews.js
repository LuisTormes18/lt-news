import Image from "next/image";
import React from "react";
import styles from "../../styles/news.module.css";

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const CardNews = ({ article }) => {
    return (
        <article className={styles.card}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
                <img src={article.urlToImage} alt="image" />
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

// <Image loader={myLoader} width={300} height={300} src={article.urlToImage} alt="image"/>
// <p>{article.description}</p>
