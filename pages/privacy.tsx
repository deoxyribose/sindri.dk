import Container from '../components/Container'

export default function Privacy({ privacy }) {
  return (
    <Container title="Privacy – Sindri">
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-between">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          No cookie policy
        </h1>

        <div className="prose mb-8 max-w-none leading-6 text-gray-600 dark:text-gray-400">
          <p>We don't track you, so no need for 🍪🍪.</p>
        </div>
      </div>
    </Container>
  )
}
