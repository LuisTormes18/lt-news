import { useState, useEffect, useContext } from "react";

const useGetNews = (category = null) => {
    const [error, setError] = useState(false);    
    const [loading, setLoading] = useState(false);    
    const [news, setNews] = useState([]);

     const date = new Date();
     const from = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
     const api_key = process.env.NEXT_PUBLIC_API_KEY;

	if(!category){
     const url = `https://newsapi.org/v2/everything?&from=${from}&sortBy=popularity&apiKey=${api_key}`;
	}else{
     const url = `https://newsapi.org/v2/everything?q=${category}&from=${from}&sortBy=popularity&apiKey=${api_key}`;

	}

    useEffect(() => {
        setLoading(true);
        async function getNews() {
            
            try {

                const resp = await fetch(url);
                const data = await resp.json();

                if (data.status === "ok") {
                   setNews( data.articles );
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