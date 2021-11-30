import Head from "next/head";

const posts = [
  {
    title: "Forklarlig ML",
    href: "/forklarlig-ml",
    description: "Mange organisationer døjer med...",
    date: "Nov 30, 2021",
    datetime: "2021-11-30",
  },
];

export default function () {
  return (
    <div className="bg-gray-900 text-gray-200 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 min-h-screen">
      <Head>
        <title>Sindri - </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl"></h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p className="text-xl">Fælgende services tilbyder vi</p>
          </div>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <p className="text-sm text-gray-400">
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
              <a href={post.href} className="mt-2 block">
                <p className="text-xl font-semibold text-gray-200">{post.title}</p>
                <p className="mt-3 text-base">{post.description}</p>
              </a>
              <div className="mt-3">
                <a href={post.href} className="text-base font-semibold hover:text-white">
                  Læs mere
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
