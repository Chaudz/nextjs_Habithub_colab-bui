"use client";

import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { createPost } from "./action";

export default function Page() {
  const router = useRouter();

  return (
    <nav>
      <button
        onClick={() => {
          router.push("/dashbroad");
        }}
      >
        Onclick
      </button>
      <button
        onClick={() => {
          createPost("fdsaf");
        }}
      >
        create
      </button>
    </nav>
  );
}
