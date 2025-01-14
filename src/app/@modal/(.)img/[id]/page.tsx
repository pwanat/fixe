import { Modal } from "./modal";

import FullPageImageView from "~/app/components/full-image-page";

export default async function ImgModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;

  return (
    <Modal>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <FullPageImageView id={Number(photoId)} />;
      </div>
    </Modal>
  );
}
