import Container from "../../components/Container"
import Image from "next/image"
import Link from "next/link"

export default function Post({ post }) {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-between">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          NGO platform
        </h1>
        <div className="mt-2 flex w-full flex-row items-center">
          <Image
            alt="Domnik Zdyb"
            height={24}
            width={24}
            src="/dz.jpg"
            className="rounded-full"
            priority
          />
          <p className="ml-2 text-sm text-gray-400 dark:text-gray-500">
            {"Domnik Zdyb / 2012 - 2022"}
          </p>
        </div>
        <div className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
          <p>
            <Link href="/cases/ngo-platform">
              <a>Read in english</a>
            </Link>
          </p>
          <p>
            En forening eller fond har brug for nemt at kunne modtage
            donationer, bogføre dem og til hver en tid vide hvor mange penge de
            har modtaget inden for en given kategori. Yderligere skal visse
            foreninger indberette gaver og blanketter til Skat og
            Civilstyrelsen.
          </p>
          <p>
            Små foreninger er ofte udfordret når det kommer til at sætte
            effektive IT systemer op. Resultatet kan være en betydelig
            administrativ byrde eller høje omkostninger forbundet med
            eksisterende produkter på markedet.
          </p>
          <p>
            Vi tilbyder at integrere økonomisystemer, betalingsløsninger og
            rapporteringsværktøjer med henblik på at automatisere administrative
            processer, omkostningseffektivitet og optimal ledelsesinformation.
          </p>
          <ul>
            <li>
              Integration af eksisterende systemer med et økonomisystem som
              E-conomic, Billy eller Wave.
            </li>
            <li>
              Integration eller opsætning af hjemmeside med en betalingsløsning
              fra Stripe. Stripe er verdens førende udbyder af
              betalingsinfrastruktur. Deres produkt er både billigt og muliggør
              integration med ethvert tænkeligt andet system.
            </li>
            <li>
              Opsætning af donordatabase med lynhurtig opslagsfunktionalitet og
              dashboards - altid synkroniseret med økonomisystemet og
              hjemmesiden.
            </li>
            <li>
              Opsætning af eksport-funktionalitet så som indberetningsfil og
              blanket 03.012 til Skat.
            </li>
          </ul>
        </div>
        <Link href="/cases">
          <a className="pt-8 text-sm font-light text-gray-400 dark:text-gray-500">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
              tilbage til cases
            </div>
          </a>
        </Link>
        <span className="h-16" />
      </div>
    </Container>
  )
}
