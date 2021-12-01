import Link from "next/link";

export default function Nav(props) {
  return (
    <div className="mx-auto max-w-7xl bg-gray-900 pt-4">
      <nav>
        <div className="flex">
          <ul className="flex items-center justify-between text-gray-200 w-full">
            <li>
              <div className="flex text-xl font-medium md:text-xl">
                <Link href="/">
                  <a className="flex items-center">Sindri</a>
                </Link>
              </div>
            </li>
            <li>
              <div className="flex text-xl">
                <Link href={props.page}>
                  <a className="flex">{props.slug}</a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
