import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import ArticleList from "../components/ArticleList";

const Home = ({ articles }) => {
  console.log("this is data", articles);
  return (
    <div>
      <Head>
        <title>iZsk</title>
        <meta name="keywords" content="next practice app" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );

  return {
    props: {
      articles: res.data,
    },
  };
};
