import { AnimeCardContainer } from "@/components/AnimeCardContainer/AnimeCardContainer";

export default function Home() {
  return (
    <div className="bg-[#30373A] min-h-screen py-8">
      <h1 className="text-2xl font-bold mb-6 text-white text-center">
        アニメランキング投票
      </h1>
      <div className="container mx-auto">
        <AnimeCardContainer />
      </div>
    </div>
  );
}
