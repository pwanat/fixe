import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Test <span className="text-[hsl(280,100%,70%)]">T3 Stack</span> App
        </h1>
      </div>
      <div className="container flex flex-wrap items-center justify-center gap-12 px-4 py-16">
        <h2 className="text-2xl font-bold">Images</h2>
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
      </div>
    </main>
  );
}
