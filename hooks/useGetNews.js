import { useState, useEffect } from "react";

const useGetNews = (category = null) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState([]);

    let url = "http://localhost:3000/api/news";

    if(!!category){
        url += `/${category}`;
    }  

    console.log(url);

    useEffect(() => {
        setLoading(true);

        async function getNews() {
           

            try {
                const result = await fetch(url);
                const data = await result.json();

                if(data.ok){
                    setNews(data.news)
                }

            } catch (err) {
                setError(err);
                console.log(err);
            }
            setLoading(false);
        }
        getNews();
    }, [category]);

    return [news, loading, error];
};

export default useGetNews;
