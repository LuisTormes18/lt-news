import Image from 'next/image';
import React from "react";
import styles from "../../styles/news.module.css";

const CardNews = ({ article }) => {
    return (
        <div className={styles.card}>
            <a href={article.url} target="_blank" className={styles.card_title}>{article.title} </a>
            <a href={article.url} target="_blank" rel="noreferrer">
               <Image src={article.url} alt="image"/>
            </a>
            <p>{article.description}</p>

        </div>
    );
};
export default CardNews;

           