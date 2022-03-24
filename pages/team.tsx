import Container from "components/Container"
import Card from "components/Card"

export default function Team({ team }) {
  return (
    <Container title="About – Sindri">
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-between">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Team
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-8">
          <Card
            title={"Frans Zdyb"}
            subtitle={"Data scientist"}
            src={`/fz.jpg`}
            alt={"Picture of Frans"}
          >
            <div className="prose max-w-none">
              <h4 className="font-medium text-gray-900 dark:text-gray-100">
                About
              </h4>
              <p className="-mt-4 text-gray-600 dark:text-gray-400">
                Data scientist with deep expertise in theory and practice of
                machine learning and statistics. 10+ years of programming
                experience, and a broad background in applied mathematics.
                Experienced in technical leadership, high proficiency in
                translating business needs to engineering solutions.
              </p>

              <h4 className="font-medium text-gray-900 dark:text-gray-100">
                Technologies
              </h4>
              <div className="space-y-4 leading-7 text-gray-600 dark:text-gray-400">
                <div className="flex flex-col md:flex-row">
                  <div className="font-medium dark:text-gray-400 md:w-1/5 md:font-normal">
                    Languages:
                  </div>

                  <div className="text-sm md:w-4/5 md:text-base">
                    Python, R, Julia, MATLAB, Java, Haskell, Bash, Scala, C,
                    JavaScript.
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="font-medium dark:text-gray-400 md:w-1/5 md:font-normal">
                    Frameworks:
                  </div>
                  <div className="text-sm md:w-4/5 md:text-base">
                    Pytorch, Tensorflow, Tensorflow Probability, Pyro, Edward,
                    Stan, Numpy, Scipy, SymPy, Matplotlib, Jupyter,
                    Scikit-Learn, auto-sklearn, Apache Spark, AWS, Dask, SQL,
                    MongoDB, Neo4j, Cypher, Git, Gen, Pandas, Docker, Jira,
                    Azure, OOP, CUDA, OpenGL, awk, sed, curl, GAMS.
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="font-medium dark:text-gray-400 md:w-1/5 md:font-normal">
                    Methods:
                  </div>
                  <div className="text-sm md:w-4/5 md:text-base">
                    Deep learning, MLPs, convolutional NNs, LSTMs, transformers,
                    VAEs, probabilistic programming, generative models, NLP,
                    word embeddings, speech recognition, computer vision,
                    biomedical signals, time series analysis, Bayesian
                    statistics, variational inference, MCMC, outlier detection,
                    pre-processing, data cleaning, pre-trained models, Bayesian
                    optimization, AutoML, digital signal processing.
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card
            title={"Dominik Zdyb"}
            subtitle={"Data engineer & Analyst"}
            src={`/dz.jpg`}
            alt={"Picture of Dominik"}
          >
            <div className="prose max-w-none">
              <h4 className="font-medium text-gray-900 dark:text-gray-100">
                About
              </h4>
              <p className="prose -mt-4 max-w-none leading-6 text-gray-600 dark:text-gray-400">
                Economist with strong IT skills. Experienced in configuring
                cloud computing services, system integration and data migration.
              </p>
              <h4 className="font-medium  text-gray-900 dark:text-gray-100">
                Technologies
              </h4>
              <div className="space-y-4 leading-7 text-gray-600 dark:text-gray-400">
                <div className="flex flex-col md:flex-row">
                  <div className="font-medium dark:text-gray-400 md:w-1/5 md:font-normal">
                    Languages:
                  </div>
                  <div className="text-sm md:w-4/5 md:text-base">
                    Python, R, SQL, JavaScript, HTML, CSS
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="font-medium dark:text-gray-400 md:w-1/5 md:font-normal">
                    Frameworks:
                  </div>
                  <div className="text-sm md:w-4/5 md:text-base">
                    Tidyverse, ggplot2, Pandas, Git, Docker, Azure, AWS.
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="font-medium dark:text-gray-400 md:w-1/5 md:font-normal">
                    Methods:
                  </div>
                  <div className="text-sm md:w-4/5 md:text-base">
                    Accounting, survey design, data visualisation, web
                    developement, REST-API's.
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  )
}
