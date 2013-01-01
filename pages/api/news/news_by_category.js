export default function (req, res) {
    const { category } = req.params
    const key = process.env.NEXT_PUBLIC_API_KEY;
    let news = [];

    try {
        const res = await fetch(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}`
        );
        const data = await res.json();

        news = data.response.docs.map((article) => {
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
    } catch (err) {
        return res.json({ ok: false, err});
    }

    res.json({
        ok: true,
        news,
    });
  }
  
import { categories } from "../const/const";
