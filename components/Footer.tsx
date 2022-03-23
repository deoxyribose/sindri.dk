import Link from "next/link"
import ExternalLink from "./ExternalLink"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-start justify-center">
        <hr className="border-1 w-full border-gray-200 dark:border-gray-800" />
        <div className="w-full max-w-2xl py-2">
          <div className="flex justify-center space-x-4 text-sm">
            <Link href="/values">
              <a className="text-gray-600 transition hover:underline dark:text-gray-400">
                Values
              </a>
            </Link>
            <Link href="/privacy">
              <a className="text-gray-600 transition hover:underline dark:text-gray-400">
                No-cookies
              </a>
            </Link>
            <Link href="/colofon">
              <a className="text-gray-600 transition hover:underline dark:text-gray-400">
                Colofon
              </a>
            </Link>
            <ExternalLink href="https://datacvr.virk.dk/enhed/virksomhed/42777366">
              CVR
            </ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
