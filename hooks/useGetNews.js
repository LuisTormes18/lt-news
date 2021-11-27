import { useState, useEffect, useContext } from "react";

const useGetNews = ( category='general' ) => {
    const [error, setError] = useState(false);    
    const [loading, setLoading] = useState(false);    
    const [news, setNews] = useState({
        articles:[],
        totalResults:0
    });

     const date = new Date();
     const from = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`;
     const api_key = process.env.NEXT_PUBLIC_API_KEY_NEWSAPI;
 
     const url = `https://newsapi.org/v2/everything?q=${category}&from=${from}&sortBy=popularity&apiKey=${api_key}`
    

    useEffect(() => {
        setLoading(true);

         async function getNews() {


            
            try {

                const resp = await fetch(url);
                const data = await resp.json();
                    console.log(data)
                
                if (data.status) {
                    console.log(data.articles);
                   setNews( {articles:data.articles, totalResults:data.totalResults} );
                } else {
                    console.log(data.error);
                    setError(true);
                }
            } catch (error) {
                console.log(error);
                setError(true);
            }   
            
            setLoading(false);
            console.log('ya realiza la peticion');

     }
        getNews();
    }, [category]);


    return [news.articles, loading, error, news.totalResults];
}

export default useGetNews;