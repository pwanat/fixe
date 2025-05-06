"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import SimpleUploadButton from "../simple-upload-button";
import { DarkModeToggle } from "../dark-mode-toggle";
import { Navigation } from "./partials/navigation";

export const TopNav = () => {
  return (
    <nav className="flex justify-between gap-4 bg-slate-300 px-4 py-4 dark:bg-slate-800">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">BIEDAK</div>
        <Navigation />
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
