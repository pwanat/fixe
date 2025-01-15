"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import SimpleUploadButton from "./simple-upload-button";
import { DarkModeToggle } from "./dark-mode-toggle";

export const TopNav = () => {

  return (
    <nav className="flex items-center justify-between gap-4 bg-slate-300 dark:bg-slate-800 px-4 py-4">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-xl font-bold">
          Fixe
        </Link>
      </div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-4">
            <SimpleUploadButton />
            <DarkModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};
