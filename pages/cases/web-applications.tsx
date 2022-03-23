import Container from "../../components/Container"
import Image from "next/image"

export default function Post({ post }) {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-between">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Web applications
        </h1>
        <div className="mt-2 flex w-full flex-row items-center">
          <Image
            alt="Frans Zdyb"
            height={24}
            width={24}
            src="/fz.jpg"
            className="rounded-full"
          />
          <p className="ml-2 text-sm text-gray-400 dark:text-gray-500">
            {"Frans Zdyb / 2011 - 2012"}
          </p>
        </div>
        <div className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Developing web applications in Django and JavaScript for Danske Spil
            and Pfizer, capable of performing maximum likelihood estimation for
            statistical models of questionnaires and game-play data.
          </p>
        </div>

        <span className="h-16" />
      </div>
    </Container>
  )
}
