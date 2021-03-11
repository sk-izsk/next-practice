import axios from "axios";
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps } from "next";
import Link from "next/link";
interface Props {}

const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <div>
      <div>{article.title}</div>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back </Link>
    </div>
  );
};

export default article;

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await axios(
    `http://localhost:3000/api/article/${context.params.id}`
  );
  return {
    props: {
      article: response.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
) => {
  const res = await axios(`http://localhost:3000/api/article`);

  const articles = res.data;

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
