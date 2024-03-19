import Link from "next/link";

import { Button } from "@acme/ui/button";

export const runtime = "edge";

export default function User() {
  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Users Page
        </h1>
        <div className="w-full max-w-2xl overflow-y-scroll">
          <Button className="bg-cyan-100 p-2">
            <Link href="/">
              <p>Home</p>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
