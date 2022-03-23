import Container from "../components/Container"
import Skill from "components/Skill"
import Link from "next/link"
import ReactTooltip from "react-tooltip"

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

                <h2 className="text-lg font-semibold tracking-tight text-black dark:bg-gradient-to-r dark:from-blue-500 dark:to-red-500 dark:bg-clip-text dark:text-transparent md:text-xl">
                  Data analysis on demand{" "}
                </h2>
              </div>
            </div>

            <div className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
              <p className="text-gray-600 dark:text-gray-400">
                We are a two-person team spacializing in data engineering, data
                science and decision support. We have experience working with a
                variety of customers and freelance as part of your analytics
                team.
              </p>
            </div>
          </div>
        </div>
        <h3 className="mb-4 mt-8 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          Services
        </h3>
        <ul>
          <Skill title="Data engineering">
            If your data is spread accros multiple systems, making it hard to
            conduct reporting and analysis, we can help with creating a{" "}
            <span
              className="underline decoration-dashed"
              data-tip
              data-for="database"
            >
              single source of truth
            </span>{" "}
            <ReactTooltip className="max-w-xs" id="database">
              <span>Think cloud / database.</span>
            </ReactTooltip>
            for all your data. This step is the foundation for further analysis
            and reporting. We advice about pros and cons of different solutions
            - also when it means pointing you in a direction that is not
            profitable for us.
          </Skill>
          <Skill title="Data science">
            This is all about understanding the structure of the data. We have a
            phd level knowledge of methods and novel techniques, but that can
            rarely stand alone. The better we understand the domain, the better
            we can help. This is why collaboration with domain experts is
            crucial.
          </Skill>
          <Skill title="Decision support">
            This is what you ultimately see - reports, dashboards and results.{" "}
          </Skill>
        </ul>

        <div className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
          <p className="text-gray-700 dark:text-gray-400">
            Often what we do, does not fit neatly into one of these 3
            categories. Take a look at{" "}
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
