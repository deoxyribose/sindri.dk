import Container from "../components/Container"
import Skill from "components/Skill"
import Link from "next/link"

export default function Home({ home }) {
  return (
    <Container>
      <div className="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 pb-8 dark:border-gray-700">
        <div className="mx-auto flex w-full flex-row items-start justify-between">
          <div className="flex flex-col pr-4">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
                  Sindri
                </h1>

                <h2 className="text-lg font-semibold tracking-tight text-black dark:text-gray-200 md:text-xl">
                  Data analysis on demand{" "}
                </h2>
              </div>
            </div>

            <div className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
              <p className="text-gray-600 dark:text-gray-400">
                We are a two-person team spacializing in data engineering, data
                science and decision support. We have experience working with a
                variety of companies and non-profits around the globe.
              </p>
            </div>
          </div>
        </div>
        <h3 className="mb-4 mt-8 text-2xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
          Services
        </h3>
        <ul>
          <Skill title="Data engineering">
            If your data is spread accros multiple systems, making it hard to
            conduct reporting and analysis, we can help creating a single source
            of truth for all your data. We advice about pros and cons of
            different solutions - also when it means pointing you in a direction
            that is not profitable for us.
          </Skill>
          <Skill title="Data science">
            This is all about understanding the structure of the data. We thrive
            when we can implement the right methods in collaboration with domain
            experts - probably you. We have experience in deploying cutting edge
            machine learning models, but sometimes a couple of good
            visualisations is enough to get a better understandging of your
            business case.
          </Skill>
          <Skill title="Decision support">
            This is what you ultimately see - reports, dashboards and KPI's. We
            can implement common dashboaring solutions such as Power BI or even
            custom solutions.
          </Skill>
        </ul>

        <div className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
          <p className="text-gray-700 dark:text-gray-400">
            So the three bullet points are respectively about storage, analysis
            and presentation, but often what we do, does not fit neatly into one
            of these 3 categories. Take a look at{" "}
            <Link href="/cases">
              <a>cases</a>
            </Link>{" "}
            or{" "}
            <Link href="/contact">
              <a className="text-blue-500 hover:text-blue-700">contact</a>
            </Link>{" "}
            us if you have any specific questions.
          </p>
        </div>
      </div>
    </Container>
  )
}
