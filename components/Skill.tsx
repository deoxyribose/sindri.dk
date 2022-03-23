export default function Skill(props) {
  return (
    <li className="not-prose mb-4 ml-2 list-none">
      <div className="mb-2 flex items-center text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">
          {props.title}
        </p>
      </div>
      <p className="ml-6 text-gray-700 dark:text-gray-400">{props.children}</p>
    </li>
  )
}
