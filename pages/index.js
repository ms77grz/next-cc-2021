import Head from 'next/head';

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Web Developmnent News</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      {articles.map(article => (
        <h3 key={article.id}>{article.title}</h3>
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
