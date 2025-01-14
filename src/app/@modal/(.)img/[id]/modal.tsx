'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
      <dialog ref={dialogRef} className="m-0 max-w-none max-h-none h-screen w-screen  bg-zinc-900/50" onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} className="close-button absolute top-0 right-0" />
      </dialog>
    ,
    document.getElementById('modal-root')!
  );
}