import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2030 Jonathan La Mela
      </small>
      <div className="flex flex-col justify-center items-center">
        <Link href={"/privacy-policy/web"}>Privacy policy</Link>
      </div>
    </footer>
  );
}
