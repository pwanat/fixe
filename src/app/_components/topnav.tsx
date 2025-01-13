"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { UploadButton } from "~/utils/uploadthing";

export const TopNav = () => {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between gap-4 bg-white px-4 py-4 text-black">
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
            <UploadButton
              endpoint={"imageUploader"}
              onClientUploadComplete={() => router.refresh()}
            />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};
