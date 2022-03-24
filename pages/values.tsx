import Container from "../components/Container"

export default function Values({ values }) {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-between">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Anti Values
        </h1>
        <h4 className="pt-4 pb-4 font-medium text-gray-900 dark:text-gray-100">
          Bullshit 🐂 💩
        </h4>
        <p className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
          Not sure what we mean? Never mind then. Do you see it all around us?
          Please expect more from us. But it is hard, especially when it is
          expected from us.
        </p>

        <h4 className="pt-4 font-medium text-gray-900 dark:text-gray-100">
          Rent-seeking 💰
        </h4>
        <p className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
          <ul>
            <li>
              To be honest we hate hourly billing. We want to be different here.
              Let's talk about other billing models enforcing accountability.
            </li>
            <li>You may not need an expensive data warehouse.</li>
            <li>
              We give discounts. We call it bro bono. It means we can be talked
              into working for a good cause or if we find the product really
              exciting. Cheap: yes. free: no.
            </li>
          </ul>
        </p>

        <span className="h-16" />
      </div>
    </Container>
  )
}
