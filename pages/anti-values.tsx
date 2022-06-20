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
        <div className="prose max-w-none">
          <ul className="text-gray-600 dark:text-gray-400">
            <li>Excessive marketing</li>
            <li>Buzzwords</li>
            <li>Speaking so generally that it almost make no sense</li>
          </ul>
        </div>

        <h4 className="pt-4 font-medium text-gray-900 dark:text-gray-100">
          Rent-seeking 💰
        </h4>
        <div className="prose max-w-none">
          <ul className="leading-6 text-gray-600 dark:text-gray-400">
            <li>hourly billing.</li>
            <li>Overengineering.</li>
            <li>High prices for small jobs.</li>
          </ul>
        </div>

        <span className="h-16" />
      </div>
    </Container>
  )
}
