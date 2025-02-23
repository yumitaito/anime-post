import Image from "next/image";

interface AnimeCardItemProps {
  id: number;
  title: string;
  imageUrl: string;
}

export const AnimeCardItem = ({ id, title, imageUrl }: AnimeCardItemProps) => {
  return (
    <div
      data-testid={`anime-card-${id}`}
      className="w-[310px] h-[387px] relative rounded-lg shadow-lg overflow-hidden"
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="310px"
        priority={false}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col">
        <h2
          id={`anime-title-${id}`}
          className="text-xl font-bold mb-2 text-white"
        >
          {title}
        </h2>
        <button
          id={`post-button-${id}`}
          data-testid={`post-button-${id}`}
          className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          投稿する
        </button>
      </div>
    </div>
  );
};
