import Head from "next/head";

export default function eksempler() {
  return (
    <div>
      <Head>
        <title>Sindri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto pt-40">
          {
            <article class="prose lg:prose-xl">
              <h1>Garlic bread with cheese: What the science tells us</h1>
              <p>
                For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.
              </p>
              <p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.</p>
            </article>
          }
        </div>
      </div>
    </div>
  );
}
