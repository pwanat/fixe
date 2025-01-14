import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function FullPageImageView(props: { id: number }) {
  const { id } = props;
  const image = await getImage(Number(id));
  return <img src={image.url} alt={image.name} />;
}
