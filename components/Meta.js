import Head from 'next/head';

const Meta = ({ title, keawords, description }) => {
  return (
    <Head>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='keywords' content='{keywords}' />
      <meta name='description' content='{description}' />
      <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'WebDev News',
  keawords: 'web development, programming',
  description: 'Get the latest news in web dev',
};

export default Meta;
