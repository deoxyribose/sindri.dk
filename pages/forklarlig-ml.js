import Head from "next/head";
import Nav from "../components/Nav";

export default function blogpost() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen px-4">
      <Head>
        <title>Sindri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-6xl mx-auto">
        <Nav page="#" slug="" />

        <div className="relative py-16 overflow-hidden bg-gray-900 text-gray-200 min-h-screen">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
          <div className="relative sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-red-400 font-semibold tracking-wide uppercase">Machine learning</span>
                <span className="mt-4 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">Forklarlig machine learning</span>
              </h1>
              <p className="mt-8 text-xl leading-8">
                Machine learning (ML) er for alvor trængt ind i danske virksomheder og institutiuoner. Der er mange anvendelser og udbyttet kan være stort. Denne artikkel forklarer et bestemt problem der er forbundet med at bruge ml-modeller som
                beslutningsredskab - vi kan ikke forklare hvordan modellen kom frem til sit resultat. Det kan være et problem i forhold til diskrimination og GDPR.
              </p>

              <p className="mt-8 text-xl leading-8"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
