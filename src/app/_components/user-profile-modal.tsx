"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { UserProfile } from "@clerk/nextjs";

export function UserProfileModal() {
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  return createPortal(
    <dialog ref={dialogRef} className="m-0 h-screen w-screen bg-zinc-900/50">
      <UserProfile />
      <button
        onClick={() => dialogRef.current?.close()}
        className="close-button absolute right-0 top-0"
      />
    </dialog>,
    document.getElementById("modal-root")!
  );
}
