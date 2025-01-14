import FullPageImageView from "~/app/components/full-image-page";

export const dynamicParams = false;

export default async function ImgPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <div>
      <FullPageImageView id={Number(id)} />
    </div>
  );
}
