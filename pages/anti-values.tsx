import Container from "../components/Container"

export default function Values({ values }) {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-between">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Anti Values
        </h1>
        <h4 className="pt-4 font-medium text-gray-900 dark:text-gray-100">
          Bullshit 🐂 💩
        </h4>
        <p className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
          <ul>
            <li>Excessive marketing</li>
            <li>Buzzwords</li>
            <li>Speaking so generally that it almost make no sense</li>
          </ul>
        </p>

        <h4 className="pt-4 font-medium text-gray-900 dark:text-gray-100">
          Rent-seeking 💰
        </h4>
        <p className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
          <ul>
            <li>hourly billing.</li>
            <li>Overengineering.</li>
            <li>High prices for small jobs.</li>
          </ul>
        </p>

        <span className="h-16" />
      </div>
    </Container>
  )
}
