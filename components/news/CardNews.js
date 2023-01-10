import Image from "next/image";
import React from "react";
import styles from "../../styles/news.module.css";

const CardNews = ({ article }) => {
  // truncateString
  function truncateString(string, n = 32) {
    return string?.length > n ? `${string.substring(0, n - 1)}...` : string;
  }

  return (
    <article className={styles.card}>
      <div className={styles.image_container}>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <Image src={article.urlToImage} width={300} height={250} />
        </a>
      </div>
      <a
        href={article.url}
        target="_blank"
        rel="noopener  eact noreferrer"
        className={styles.card_title}
      >
        {truncateString(article.title)}
      </a>
      <small className={styles.card_source}>{article.source}</small>
    </article>
  );
};
export default CardNews;
