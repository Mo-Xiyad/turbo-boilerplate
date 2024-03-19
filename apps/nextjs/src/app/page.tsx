// import { CreatePostForm } from "./_components/posts";

import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

import { Button } from "@acme/ui/button";

export const runtime = "edge";

export default function HomePage() {
  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Turborepo Boilerplate
        </h1>
        <SignOutButton />
        <div className="w-full max-w-2xl overflow-y-scroll">
          <Button className="bg-cyan-100 p-2">
            <Link className=" text-2xl font-bold text-primary" href="/user">
              <p>users</p>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
