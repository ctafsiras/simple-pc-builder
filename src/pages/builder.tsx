import Image from "next/image";
export default function Builder() {
  return (
    <div>
      <Image
        layout="responsive"
        width={600}
        height={400}
        alt={"Alt"}
        src={"https://placehold.co/600x400"}
      />
    </div>
  );
}
