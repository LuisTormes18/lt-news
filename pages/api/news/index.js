export default async function (req, res) {
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
        return res.json({ ok: false, err });
    }

    res.json({
        ok: true,
        news,
    });
}

// q=election
// begin_date = 20210301
// end_date = 20210331
// 'http://api.nytimes.com
//       /svc/search/v2/articlesearch.json?fl=headline&fq=web_url:%22'.
//       $url.'%22&api-key='.$nytKey;
// data.response.docs[0].multimedia = '';
// console.log('noticias:', data.response.docs[0]);
