import FullPageImageView from "~/app/components/full-image-page";
import { Button } from "~/components/ui/button";
import { deleteImage } from "~/server/queries";

export const dynamicParams = false;

export default async function ImgPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <div>
      <div className="p-2">
        <FullPageImageView id={Number(id)} />
      </div>
      <div className="p-2">
        <form
          action={async () => {
            "use server";
            await deleteImage(Number(id));
          }}
        >
          <Button type="submit" variant="destructive">
            Delete
          </Button>
        </form>
      </div>
    </div>
  );
}
