
 async function getNews({category}) {

 			const date = new Date();

 			const from = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
            const api_key = process.env.API_KEY;

            console.log('key: ',api_key, process.env)

            const url = `https://newsapi.org/v2/everything?q=${category}&from=${from}&sortBy=popularity&apiKey=${'16e193285c7446b5b781eedad21c6d24'}`;
            
            try {

                const resp = await fetch(url);
                const data = await resp.json();

                if (data.status === "ok") {
                    return data.articles
                } else {
                    console.log(data.error);
                }
            } catch (error) {
                console.log(error);
            }   
            
            return false;
     }

export default getNews