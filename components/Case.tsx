import Link from "next/link"

export default function Case({ title, icon, description, slug }) {
  return (
    <Link href={`/cases/${slug}`}>
      <a className="rounded-xl bg-white p-4 shadow-md transition hover:shadow-lg dark:bg-opacity-5 md:p-10">
        <div className="h-8 w-8 rounded-full bg-black bg-opacity-5 p-1.5 text-black dark:bg-white dark:bg-opacity-10 dark:text-white">
          {icon}
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-black dark:text-white">
            {title}
          </h3>
          <p className="mt-2 text-base font-medium text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </a>
    </Link>
  )
}
