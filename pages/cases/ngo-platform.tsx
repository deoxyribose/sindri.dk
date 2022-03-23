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
          />
          <p className="ml-2 text-sm text-gray-400 dark:text-gray-500">
            {"Domnik Zdyb / 2012 - 2022"}
          </p>
        </div>
        <div className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
          <p>
            <Link href="/cases/foreninger">
              <a>Read in danish.</a>
            </Link>
          </p>
          <p>
            An NGO, such as a charity organisation, needs to be able to receive
            donations on their website. The donation data needs to be registered
            in an accounting system and be readily available for employees to
            query in a donor database.
          </p>
          <p>
            Small charities or associations often strugle setting up these
            systems. After all, they focus on their main cause and not IT. As a
            result the administrative burden is often much higher than it needs
            to be or the revenue gets eaten up by exorbitant payments fees from
            existing off-the-shelve donation platforms.
          </p>
          <p>
            We have a very attractive offer that helps NGO's get up and running
            fast, inexpensively and fully compliant with national and EU law.
          </p>
          <p>The offer is comprised of:</p>
          <ul>
            <li>
              Setting op or integrating into an existing accounting system.
            </li>
            <li>
              Setting up or integrating a website with a payment solution.
            </li>
            <li>Setting up a donor database with a dashboard view.</li>
            <li>
              Setting up export functionality for automatic reporting to the
              authorities.
            </li>
          </ul>
        </div>

        <span className="h-16" />
      </div>
    </Container>
  )
}
