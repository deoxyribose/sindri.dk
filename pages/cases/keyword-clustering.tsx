import Container from "../../components/Container"
import Image from "next/image"

export default function Post({ post }) {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-between">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Keyword clustering
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
            {"Frans Zdyb / 2021"}
          </p>
        </div>
        <div className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Developed a SERP based clustering tool in Python and Neo4j for a
            Canadian customer. This involved developing a novel dynamic
            programming algorithm for solving the NP-complete maximum clique
            problem, creating an API for querying Neo4j using the Cypher
            language, setting up scripts for database setup and maintenance in
            MongoDB and data migration between platforms.
          </p>
        </div>

        <span className="h-16" />
      </div>
    </Container>
  )
}
