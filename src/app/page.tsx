import Link from "next/link";
import { db } from "~/server/db";

/*const mockUrls = [
  "https://utfs.io/f/d07ca49d-9377-4d0c-81c3-f161ec21a45a-bh75y4.jpg",
  "https://utfs.io/f/3402cab4-5e26-4e37-910b-d60f654f3dc5-bh75y3.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
*/
export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images, ...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 flex-col">
            <img src={image.url} />
            <div>{image.name}</div>
      </div>
      ))}
      </div>
    </main>
  );
}