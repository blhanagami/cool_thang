import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/d07ca49d-9377-4d0c-81c3-f161ec21a45a-bh75y4.jpg",
  "https://utfs.io/f/3402cab4-5e26-4e37-910b-d60f654f3dc5-bh75y3.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
      </div>
      ))}
      </div>
    </main>
  );
}