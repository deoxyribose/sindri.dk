import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sindri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-between w-full text-center px-4 space-y-10 text-gray-200 bg-gray-900 h-screen">
        <header className="items-center justify-between"></header>
        <main className="flex flex-col items-center space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold">Sindri</h1>
          <h2 className="text-2xl md:text-3xl">
            Vi laver forklarlig <span className="text-green-400">machine learning og data analyse</span>,
            <br /> sætter <span className="text-red-400">dataarkitektur</span> op i skyen, <br />
            og får det hele til at gå op i en højere enhed med <br />
            brugervenlige <span className="text-yellow-400">applikationer</span>.
          </h2>

          <div className="flex flex-col"></div>

          <nav>
            <ul className="flex text-gray-200 bg-gray-900 w-full max-w-md space-x-6">
              <li>
                <div className="hover:text-white rounded-lg font-medium md:text-xl border-2">
                  <Link href="/cases">
                    <a className="flex py-2 px-6">Cases</a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="hover:text-white rounded-lg font-medium md:text-xl border-2">
                  <Link href="/team">
                    <a className="flex py-2 px-6">Team</a>
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </main>

        <Footer />
      </div>
    </div>
  );
}
