import Head from "next/head";
import { FC } from "react";

interface Props {}

const about: FC<Props> = () => {
  return (
    <div>
      <Head>
        <title>about</title>
        <meta name="keywords" content="about" />
      </Head>
      hello
    </div>
  );
};

export default about;
