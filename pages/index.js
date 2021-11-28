import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sindri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center w-full flex-1 text-center px-4 space-y-10 text-gray-200 bg-gray-900 min-h-screen">
        <h1 className="text-4xl md:text-8xl font-bold">Sindri</h1>
        <h2 className="text-2xl md:text-3xl">
          Hejsa. Vi laver forklarlig <span className="text-green-400">maskinlæring og data analyse</span>,
          <br /> sætter <span className="text-red-400">dataarkitektur</span> op i skyen, <br />
          og får det hele til at gå op i en højere enhed med <br />
          brugervenlige <span className="text-yellow-400">applikationer</span>.
        </h2>

        <div className="flex text-gray-200 bg-gray-900 w-full max-w-md">
          <button className="flex-1 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md font-medium md:text-xl">
            <Link href="/eksempler">
              <a>Eksempler</a>
            </Link>
          </button>
          <button className="flex-1 text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md font-medium md:text-xl">
            <Link href="/team">
              <a>Team</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
