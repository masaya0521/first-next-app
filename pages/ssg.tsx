import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

// ページコンポーネントの型定義
type SSGProps = {
  message: string;
};

// SSG 向けのページを実装
// NextPageはNext.jsのPages向けの型
// NextPage<props>でpropsが入るPageであることを明示
const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;
  return (
    <div>
      {/* Headコンポーネントで包むと、その要素は<head>タグに配置される */}
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されるページです</p>
        {message}
      </main>
    </div>
  );
};

// getStaticPropsはビルド時に実行される
// GetStaticProps<SSGProps>はSSGPrpsを型にとるgetStaticPropsの型
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にgetStaticPropsが実行されました`;
  console.log(message);
  return {
    // ここで返したpropsを元にページコンポーネントを描写する
    props: {
      message,
    },
  };
};

export default SSG;
