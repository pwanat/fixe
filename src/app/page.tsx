import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap items-center justify-center gap-12 px-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white/10 p-8 shadow-xl hover:shadow-2xl"
        >
          <Link href={`/img/${image.id}`} passHref>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              alt={image.name}
              width={320}
              height={320}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
};
export default async function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Test <span className="text-[hsl(280,100%,70%)]">T3 Stack</span> App
        </h1>
      </div>
      <div className="container flex flex-wrap items-center justify-center gap-12 px-4 py-16">
        <SignedOut>
          <h2 className="text-2xl font-bold">Please sign in above</h2>
        </SignedOut>
        <SignedIn>
          <div className="flex flex-col items-center justify-center gap-12 px-4 py-4">
            <h2 className="text-2xl font-bold">Images</h2>
            <Images />
          </div>
        </SignedIn>
      </div>
    </main>
  );
}
