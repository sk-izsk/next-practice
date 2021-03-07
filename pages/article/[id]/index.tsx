import axios from "axios";
import { GetStaticPaths } from "next";
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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const response = await axios(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   return {
//     props: {
//       article: response.data,
//     },
//   };
// };

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios(`https://jsonplaceholder.typicode.com/posts`);

  const articles = res.data;

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
