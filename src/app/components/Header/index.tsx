"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import "./styles/header.css";

export default function Header() {
  const pathName = usePathname();
  return (
    <div className="header">
      <Link className={`link ${pathName === "/dashbroad" ? "active" : ""}`} href="/dashbroad">
        Dashbroad
      </Link>
      <Link className={`link ${pathName === "/about" ? "active" : ""}`} href="/about">
        ABout
      </Link>
      <Link className={`link ${pathName === "/blog" ? "active" : ""}`} href="/blog">
        Blog
      </Link>
    </div>
  );
}
