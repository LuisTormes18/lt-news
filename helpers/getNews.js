 export async function getNews() {
            const date = "2021-11-18";
            const api_key = "16e193285c7446b5b781eedad21c6d24";
            const url = `https://newsapi.org/v2/everything?q=${category}&from=${date}&sortBy=popularity&apiKey=${api_key}`;
            try {
                const resp = await fetch(url);
                const data = await resp.json();

                if (data.status === "ok") {
                    return data.articles;
                } else {
                    console.log(data.error);
                }
            } catch (error) {
                console.log(error);
            }

            return null;
}