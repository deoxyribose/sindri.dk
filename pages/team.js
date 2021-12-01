import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";

const people = [
  {
    name: "Frans Zdyb",
    role: "Ekspert i machine learning",
    twitterUrl: "https://twitter.com/FZdyb",
    linkedinUrl: "https://www.linkedin.com/in/frans-zdyb-84a7a975/",
    imageUrl: "/fz.webp",
    email: "mailto:fz@sindri.dk",
  },
  {
    name: "Dominik Zdyb",
    role: "Data analytiker",
    twitterUrl: "https://twitter.com/dominik_zdyb",
    linkedinUrl: "https://www.linkedin.com/in/dzgreen/",
    imageUrl: "/dz.webp",
    email: "dz@sindri.dk",
  },
];

export default function Team() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen px-4  pb-8">
      <Head>
        <title>Sindri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-6xl mx-auto">
        <Nav page="#" slug="" />
        <div className="space-y-12 pt-24 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="flex flex-col space-y-2">
            <h2 className="text-2xl font-bold tracking-tight pb-4">Team</h2>
            <p className="text-xl text-gray-200">
              Siden november 2021 har vi arbejdet sammen om at levere dataløsninger til danske virksomheder og organisationer. Før det har vi oparbedjet en solid balast af erfaringer fra både danske og udenlandske virksomheder og NGO'er. Læs under
              Cases hvad vi har erfaring med og hvad vi kan tilbyde dig.{" "}
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <Image className="object-cover shadow-lg rounded-lg" loading="eager" priority="true" layout="fill" src={person.imageUrl} alt="" />
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p>{person.role}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-200">{person.bio}</p>
                    </div>

                    <ul role="list" className="flex space-x-5">
                      <li>
                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Twitter</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href={person.email} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Email</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
