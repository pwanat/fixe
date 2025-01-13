import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return (
    <div className="flex flex-wrap items-center justify-center gap-12 px-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white/10 p-8 shadow-xl"
        >
          <img src={image.url} className="h-48 rounded-lg" />
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
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Test <span className="text-[hsl(280,100%,70%)]">T3 Stack</span> App
        </h1>
      </div>
      <div className="container flex flex-wrap items-center justify-center gap-12 px-4 py-16">
        <SignedOut>
          <h2 className="text-2xl font-bold">Please sign in above</h2>
        </SignedOut>
        <SignedIn>
          <div className="flex flex-col items-center justify-center gap-12 px-4 py-16">
            <h2 className="text-2xl font-bold">Images</h2>
            <Images />
          </div>
        </SignedIn>
      </div>
    </main>
  );
}
