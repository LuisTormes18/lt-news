import { useState, useEffect, useContext } from "react";

const useGetNews = (category ='general' , q = null) => {
    const [error, setError] = useState(false);    
    const [loading, setLoading] = useState(false);    
    const [news, setNews] = useState([]);

     const date = new Date();
     const from = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
     const api_key = process.env.NEXT_PUBLIC_API_KEY;


     let url = `https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey${api_key}`;

	if(!!q){
     url = `https://newsapi.org/v2/everything?q=${q}&sortBy=popularity&apiKey=${api_key}`;
	}


    console.log(url);

    useEffect(() => {
        setLoading(true);
        async function getNews() {
            
            try {

                const resp = await fetch(url);
                const data = await resp.json();

                if (data.status === "ok") {
                   setNews( data.articles );
                   console.log(data)
                } else {
                    console.log(data.error);
                    setError(true);
                }
            } catch (error) {
                console.log(error);
                setError(true);
            }   
            
            setLoading(false);
     }

        getNews();
    }, [category]);

    return [news, loading, error];
}

export default useGetNews