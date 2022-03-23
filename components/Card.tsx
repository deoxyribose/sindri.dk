import Obfuscate from "react-obfuscate"
import Image from "next/image"

export default function Card(props) {
  return (
    <div className="rounded-xl bg-white p-10 shadow-lg dark:bg-opacity-5">
      <div className="flex w-full items-center ">
        <span className="relative inline-block aspect-square h-16 w-16 md:h-24 md:w-24">
          <Image
            alt={props.alt}
            src={props.src}
            layout="fill"
            priority
            className="rounded-full"
          />
          {/* <span className="absolute bottom-2 right-2 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" /> */}
        </span>

        <div className="flex flex-col justify-center p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {props.title}
          </h3>
          <p className="leading-5 text-gray-400 dark:text-gray-300">
            {props.subtitle}
          </p>
        </div>
      </div>
      {props.children}
    </div>
  )
}
