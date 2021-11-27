import { useState, useEffect, useContext } from "react";

import Layout from "../components/layout/Layout";
import CardNews from "./../components/news/CardNews";
import Title from "./../components/ui/Title";
import styles from "../styles/news.module.css";

export default function Home({news}) {

    return (
        <div>
           <Title title='LTNews' />

            <Layout>
            
                <div className={styles.grid_cards}>
                    {
                        news?.map(article => <CardNews key={article.title} article={article} /> )
                    }
                </div>
                
            </Layout>
        </div>
    );
}
export async function getStaticProps() {
  // q=election
  // begin_date = 20210301
  // end_date = 20210331

  const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3kGdIxXI5MOoP3ScB0zKfOmRYzJbhHcZ`)
  const data = await res.json()

 const news = data.response.docs.map(article =>{

    return {
        title:article.headline.main,
        description:article.abstract,
        url:article.web_url,
        urlToImage:article.multimedia[0].url,
        source:article.source,
        date:article.pub_date,
        id:article._id,
    }

  })

    // data.response.docs[0].multimedia = '';
    // console.log('noticias:', data.response.docs[0]);

    return {
      props: { news },
      revalidate: 1,
    }

  }