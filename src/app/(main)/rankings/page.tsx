import { AnimeCardContainer } from "@/components/AnimeCardContainer/AnimeCardContainer";

export default function RankingsPage() {
  return (
    <main className="bg-[#30373A] min-h-screen py-8">
      <h1 className="text-2xl font-bold mb-6 text-white text-center">
        ランキング表
      </h1>
      <AnimeCardContainer />
    </main>
  );
}
