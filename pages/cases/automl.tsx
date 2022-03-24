import Container from "../../components/Container"
import Image from "next/image"

export default function Post({ post }) {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-between">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          AutoML
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
            {"Frans Zdyb / 2021"}
          </p>
        </div>
        <div className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Developing an AutoML system for unsupervised learning, based on
            compositional model search for Bayesian networks and black-box
            variational inference. The project was developed over several years,
            starting with a Bayesian optimization approach to AutoML using
            scikit-learn, Apache Spark and Dask, to a generative modelling
            approach using Edward, TensorFlow and TensorFlow Probability, to
            deep probabilistic programming in Pyro and PyTorch.
          </p>
        </div>

        <span className="h-16" />
      </div>
    </Container>
  )
}
