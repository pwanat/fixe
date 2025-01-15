import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const { id } = props;
  const image = await getImage(Number(id));
  return <img src={image.url} alt={image.name} />;
}
