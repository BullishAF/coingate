import Head from 'next/head';

import Main from './Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>coingate | Crypto statistics</title>
      </Head>

      <Main />
    </div>
  );
}
