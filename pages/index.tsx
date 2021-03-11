import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import ArticleList from "../components/ArticleList";

const Home = ({ articles }) => {
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
  const res = await axios(`http://localhost:3000/api/article`);

  return {
    props: {
      articles: res.data,
    },
  };
};
