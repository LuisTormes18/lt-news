import Head from "next/head";
import { useRouter } from "next/router";

import Loading from "../components/ui/Loading";
import NewsContainer from "../components/news/NewsContainer";
import { categories } from "../const/const";
import useGetNews from "../hooks/useGetNews";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  const [news, loading] = useGetNews(category);

  if (!categories.includes(category)) {
    return (
      <div>
        <h1>Error 404</h1>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>LTNews | {category} </title>
        <meta name="description" content="web site of news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title-category">{category}</h1>
      {loading ? <Loading /> : <NewsContainer news={news} />}
    </div>
  );
};

export default Category;
