import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="mx-auto py-4 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-8">
      <nav>
        <div className="flex">
          <ul className="flex items-center justify-between text-gray-200 bg-gray-900 w-full">
            <li>
              <div className="flex text-xl font-medium md:text-xl">
                <Link href="/">
                  <a className="flex items-center">Sindri</a>
                </Link>
              </div>
            </li>
            <li>
              <div className="flex text-xl">
                <Link href="/cases">
                  <a className="flex">Cases</a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
