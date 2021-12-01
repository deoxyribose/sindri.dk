import Head from "next/head";
import Nav from "../components/Nav";

const posts = [
  {
    title: "Forklarlig machine learning",
    href: "/forklarlig-ml",
    description:
      "Machine learning (ML) er for alvor trængt ind i danske virksomheder og institutiuoner. Der er mange anvendelser og udbyttet kan være stort. Denne artikkel forklarer et bestemt problem der er forbundet med at bruge ml-modeller som beslutningsredskab - vi kan ikke forklare hvordan modellen kom frem til sit resultat. Det kan være et problem i forhold til diskrimination og GDPR.",
    date: "Nov 30, 2021",
    datetime: "2021-11-30",
  },
  {
    title: "Er dine data spærret inde?",
    href: "/dataudvinding",
    description:
      "Frans og jeg er efterhånden blevet nogle garvede data udvindere. Der kan gå helt sport i den, når data skal befries fra en kilde som ikke har en udlæsningsfunktion eller hvor formatet er låst, så som billeder og pdf. Nogen organisationer er landet i en situation hvor en leverandør ikke vil lade dem udlæse data og på den måde binder de kunden til at beholde leverandøren.",
    date: "Dec 01, 2021",
    datetime: "2021-12-01",
  },
];

export default function () {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen px-4">
      <Head>
        <title>Sindri - </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-6xl mx-auto">
        <Nav page="/" slug="" />
        <div className="bg-gray-900 pt-24 divide-y-2 divide-gray-200">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl"></h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p className="text-4xl">Her beskriver vi hvilke services vi er særligt gode til.</p>
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
    </div>
  );
}
