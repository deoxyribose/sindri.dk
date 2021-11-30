import Head from "next/head";

export default function eksempler() {
  return (
    <div>
      <Head>
        <title>Sindri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto pt-20">
          {
            <article class="prose lg:prose-xl">
              <h1>forklarlig maskinlæring</h1>
              <p>styles Onsdag</p>
            </article>
          }
        </div>
      </div>
    </div>
  );
}
