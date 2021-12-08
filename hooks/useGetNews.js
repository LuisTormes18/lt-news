import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useGetNews = (category = null) => {
    const router = useRouter();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState();

    const key = process.env.NEXT_PUBLIC_API_KEY;    
    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}`

    if (!!category) {
        url += `&q=${category}`;
    }

    const mapData = (data)=>{

    	const newsData = data.response.docs.map((article) => {
            return {
                title: article.headline.main,
                description: article.abstract,
                url: article.web_url,
                urlToImage: `https://www.nytimes.com/${article.multimedia[0]?.url}`,
                source: article.source,
                date: article.pub_date,
                id: article._id,
            };
        });
    	return newsData;
    }

    useEffect(() => {
        setLoading(true);

        async function getNews() {
            try {
                const result = await fetch(url);
                const data = await result.json();

                if (data.status === 'OK') {


                    setNews(mapData(data));
                }
            } catch (err) {
                setError(err);
                console.log(err);
            }
            setLoading(false);
        }
        getNews();
    }, [url]);

    return [news, loading, error];
};

export default useGetNews;
