import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full space-x-5 text-gray-600 p-1 bg-gray-900 ">
      <p className="flex items-center justify-center ">Sindri ApS cvr: 42777366</p>
      <div className="flex">
        <Link href="/privatliv">
          <a>Privatliv og cookies?</a>
        </Link>
      </div>
    </footer>
  );
}
