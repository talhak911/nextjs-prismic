import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import React from "react";

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="flex  p-3 bg-slate-300 items-center justify-between">
        <Link className={' font-display font-bold text-xl'}href={'/'}>Home </Link>
      <nav  >
        <ul className="flex gap-6">
          {settings.data.navigation.map(({ label, link }) => (
            <li className="bg-slate-500 rounded-xl px-2 py-1 text-white" key={label}>
              <PrismicNextLink field={link}> {label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
