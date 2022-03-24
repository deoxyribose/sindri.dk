import Container from "../../components/Container"
import Image from "next/image"

export default function Post({ post }) {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-between">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Smart Grid Optimization
        </h1>
        <div className="mt-2 flex w-full flex-row items-center">
          <Image
            alt="Frans Zdyb"
            height={24}
            width={24}
            src="/fz.jpg"
            className="rounded-full"
            priority
          />
          <p className="ml-2 text-sm text-gray-400 dark:text-gray-500">
            {"Frans Zdyb / 2021 - 2022"}
          </p>
        </div>
        <div className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Developing electricity demand prediction and load balancing
            algorithms for smart grids in the US, Europe and Africa.
          </p>
          <p>
            Developed the software infrastructure for a US-based power grid
            sensor company as senior engineer and team lead. This involved
            developing a real-time learning algorithm for GLM, guiding embedded
            systems developers in implementing numerical algorithms for solving
            systems of linear equations, real-time outlier detection, data
            pre-processing and cleaning, setting up pipelines for automated data
            collection and analysis, continuous integration and deployment using
            GitLab, project management using Jira and setting up automated
            testing pipelines.
          </p>
        </div>

        <span className="h-16" />
      </div>
    </Container>
  )
}
