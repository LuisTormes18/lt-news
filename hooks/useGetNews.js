import { useState, useEffect } from "react";

const useGetNews = (category = "general") => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState([]);

    useEffect(() => {
        setLoading(true);

        async function getNews() {
            const key = process.env.NEXT_PUBLIC_API_KEY;
            let newsMap = [];

            try {
                const res = await fetch(
                    `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}`
                );
                const data = await res.json();

                newsMap = data.response.docs.map((article) => {
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
                setNews(newsMap);
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
