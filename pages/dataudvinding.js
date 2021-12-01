// import Image from "next/image";
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

        <div className="relative py-16 overflow-hidden bg-gray-900 text-gray-200 min-h-screen">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
          <div className="relative sm:px-6 lg:px-8">
            <div className="prose text-gray-200 text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-red-400 font-semibold tracking-wide uppercase"></span>
                <span className="block text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">Er dine data spærret inde?</span>
              </h1>
              <p className="mt-8 text-xl leading-8">
                Frans og jeg er efterhånden blevet nogle garvede "data udvindere". Der kan gå helt sport i den, når data skal befries fra en kilde som ikke har en udlæsningsfunktion eller hvor formatet er låst, så som billeder og pdf. Nogen
                organisationer er landet i en situation hvor en leverandør ikke vil lade dem udlæse data og på den måde binder de kunden til at beholde leverandøren. Som billedet forneden viser, kunne det være alle mulige formater og systemer, som af
                den ene eller anden grund ikke lige er til at arbejde med.{" "}
              </p>
              <div className="aspect-w-5 aspect-h-3">
                <img className="rounded-lg" src="/dataudvinding.png" layout="fill" />
              </div>

              <p className="mt-8 text-xl leading-8 py-4">For at få befriet data fra gidslet, kan det være nødvendigt at bruge flere teknikker og ikke mindst være kreativ i brugen af dem. Her er de primære teknikker vi bruger:</p>
              <ul role="list">
                <li>Webscraping med R, Python eller javascript - tre populere programmingssprog. Nogne gange kræves det at simulere menneskelig adfærd, opsætte en server eller vpn forbindelse.</li>
                <li>
                  Machine learning. Er der tale om et klassifikationsproblem, kan det i nogen tilfælde være en fordel at bruge machine learning til at genkende objekterne der skal udvindes. Det oplagte eksempel er optical character recognition ofte
                  kaldet OCR. Med OCR kan vi genkende text lagret som billeder. Her kan vi oftest slippe afsted med at bruge open source biblioteker. Ofte skal man dog hjælpe OCR-værktøjet i gang ved at partere filerne eller billederne. Et andet
                  eksempel på klassifikaiton kunne være at matche bilag fra et økonomisystem til forskellige dimentioner som kunder, leverandører eller konto i kontoplanen.
                </li>
              </ul>

              <p className="mt-8 text-xl leading-8 py-4">Vi har samlet et par eksempler på dataudvinding vi har beskæftiges os med gennem tiderne: </p>
              <div className="border-2 p-2 border-gray-500 overflow-x-auto">
                <table>
                  <thead>
                    <tr className="text-gray-200">
                      <th>Produkt</th>
                      <th>Gidsel</th>
                      <th>Teknik</th>
                      <th>Destination</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Satspuljen</td>
                      <td>PDF</td>
                      <td>Scraping med R</td>
                      <td>Excel</td>
                    </tr>
                    <tr>
                      <td>Bilagsklassifikation</td>
                      <td>Blandet pdf, billede, email</td>
                      <td>Scraping med R kombineret med opslag i cvr registeret og dansk adresseregister</td>
                      <td>E-conomic økonomisystem</td>
                    </tr>
                    <tr>
                      <td>Automatisering af menneske-computer interaktion</td>
                      <td>Et virvar af programmer</td>
                      <td>Skærmoptager programmeret med Julia</td>
                      <td>SQLite</td>
                    </tr>
                    <tr>
                      <td>Offentlige data til modellering som kun er tilgængelige via web applikation eller pdf</td>
                      <td>App</td>
                      <td>Scraping med python og javascript</td>
                      <td>CSV filer</td>
                    </tr>
                    <tr>
                      <td>Gample pakke labels</td>
                      <td>Billeder</td>
                      <td>Scraping med R</td>
                      <td>Excel</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Har du brug for at vores hjælp til data udvinding? Måske som led i en større digital transformation? Så ring eller skriv til 61 99 82 35,{" "}
                <a className="text-gray-200" href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#100;&#122;&#64;&#115;&#105;&#110;&#100;&#114;&#105;&#46;&#100;&#107;">
                  &#100;&#122;&#64;&#115;&#105;&#110;&#100;&#114;&#105;&#46;&#100;&#107;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
