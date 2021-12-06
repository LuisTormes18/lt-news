import Image from "next/image";
import React from "react";
import styles from "../../styles/news.module.css";

const CardNews = ({ article }) => {
    return (
        <article className={styles.card}>
           <div className={styles.image_container}>
             <a href={article.url} target="_blank" rel="noopener noreferrer">
                <Image src={article.urlToImage} layout='fill'/>
            </a>
           </div>

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

// width={300} height={300}