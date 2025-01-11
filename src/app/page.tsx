import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://blhyfokbov.ufs.sh/f/IqSZ9Qmib29O8spFjx7fOFGCwXyIinxvHSN9rmqeDW4kZ6bu",
  "https://blhyfokbov.ufs.sh/f/IqSZ9Qmib29OWM0AIrGdGsCHJR9iKnQeaDZEjmBPYT5VLWgv",
  "https://blhyfokbov.ufs.sh/f/IqSZ9Qmib29OPwOr5XFaJ6TMCwfSZGYPXxk1bhzIAKRdtLem",
  "https://blhyfokbov.ufs.sh/f/IqSZ9Qmib29Or4Nw27DyHWOBF8sKGrD0Lu516Id3fa2hSviV",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="flex  flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Test <span className="text-[hsl(280,100%,70%)]">T3 Stack</span> App
        </h1>
      </div>
      <div className="container flex flex-wrap items-center justify-center gap-12 px-4 py-16">
        <h2 className="text-2xl font-bold">Images</h2>
        <div className="flex flex-wrap items-center justify-center gap-12 px-4">
          {mockImages.map((image) => (
            <div
              key={image.id}
              className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white/10 p-8 shadow-xl"
            >
              <img src={image.url} className="h-48 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h2 className="text-2xl font-bold">Posts</h2>
        <div className="flex flex-wrap items-center justify-center gap-12 px-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white/10 p-8 shadow-xl"
            >
              {post.name}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
