import Image from "next/image"
import Container from "../components/Container"
import Obfuscate from "react-obfuscate"

export default function Contact({ contact }) {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-between">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Contact
        </h1>

        <div className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
          <p>
            We are located in Copenhagen and on the island of Bornholm, Denmark.
          </p>
        </div>

        <div className="flex w-full text-gray-600 dark:text-gray-400">
          <div className="w-1/5 text-gray-300">Mobile:</div>
          <div className="w-4/5">+45 61998235</div>
        </div>

        <div className="flex w-full text-gray-600 dark:text-gray-400">
          <div className="w-1/5 text-gray-300">Email:</div>
          <div className="w-4/5">
            <h1>
              <Obfuscate
                email="hello@sindri.dk"
                className="text-gray-600 transition hover:underline dark:text-gray-400"
              />
            </h1>
          </div>
        </div>

        <span className="h-16" />
      </div>
    </Container>
  )
}
