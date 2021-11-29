import { useState, useEffect, useContext } from "react";

import CardNews from "./../components/news/CardNews";
import Title from "./../components/ui/Title";
import styles from "../styles/news.module.css";

export default function Home({news}) {

    return (
        <div>
           <Title title='LTNews' />
            
                <div className={styles.grid_cards}>
                    {
                        news?.map(article => <CardNews key={article.title} article={article} /> )
                    }
                </div>             
        </div>
    );
}
export async function getStaticProps() {

   let news = []; 

    try {

     const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3kGdIxXI5MOoP3ScB0zKfOmRYzJbhHcZ`)
      const data = await res.json()

     news = data.response.docs.map(article =>{

        return {
            title:article.headline.main,
            description:article.abstract,
            url:article.web_url,
            urlToImage:`https://www.nytimes.com/${article.multimedia[0]?.url}`,
            source:article.source,
            date:article.pub_date,
            id:article._id,
        }

      })
    }
    catch(err){
        console.log(err)
    }
 
    return {
      props: { news },
      revalidate: 1,
    }

  }

   // q=election
  // begin_date = 20210301
  // end_date = 20210331
  // 'http://api.nytimes.com
  //       /svc/search/v2/articlesearch.json?fl=headline&fq=web_url:%22'.
  //       $url.'%22&api-key='.$nytKey;
    // data.response.docs[0].multimedia = '';
    // console.log('noticias:', data.response.docs[0]);