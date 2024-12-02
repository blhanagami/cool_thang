import Link from "next/link";
//import { db } from "~/server/db";
import { getMyImages } from "~/server/queries"

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
  const images = await getMyImages().catch((error) => {
    console.error(error);
    return null;
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images?.map((image, index) => (
          <div key={image.id} className="w-48 flex-col">
            <img src={image.url} />
            <div>{image.name}</div>
      </div>
      ))}
      </div>
    </main>
  );
}

/*
Deleted this in line 23:

images != null &&

if we leave this in, typescript is telling us there is a more efficient way to do this,
we are breaking a linting rule.

Lint is telling us if we use any type here, we will not be able to use any of the built in stuff
against the datatype.

question mark means that if anything null or undefined, you will do the operation
 behind it. It means if it is not an image, do nothing.
*/