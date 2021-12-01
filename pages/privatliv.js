import Head from "next/head";
import Nav from "../components/Nav";

export default function blogpost() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen px-4 pb-8">
      <Head>
        <title>Sindri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-6xl mx-auto">
        <Nav page="#" slug="" />

        <div className="relative py-16 overflow-hidden bg-gray-900 text-gray-200">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
          <div className="relative sm:px-6 lg:px-8">
            <div className="prose text-gray-200 text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-red-400 font-semibold tracking-wide uppercase"></span>
                <span className="block text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">Privatliv</span>
              </h1>
              <p className="mt-8 text-xl leading-8">
                Vi kan ikke lide overvågning, tracking og pop-up beskeder. Derfor tracker vi dig ikke og vi forstyrre dig ikke med cookies på denne hjemmeside. Vi ved stadig hvor mange besøgende vi får og hvor de klikker, men vi ikke noget om dem.
              </p>

              <p className="mt-8 text-xl leading-8">Så ingen "nødvendige" cookies herfra &#9996;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
