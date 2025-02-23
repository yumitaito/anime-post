// データの型定義
interface Anime {
  id: number;
  title: string;
  imageUrl: string;
}

// APIレスポンスの型定義を追加
interface AnimeMedia {
  id: number;
  title: {
    native: string;
  };
  coverImage: {
    extraLarge: string;
  };
}

// サーバーコンポーネントとして非同期で実装
export default async function Home() {
  // AniList GraphQL APIを使用する例
  const query = `
    query {
      Page {
        media(status: RELEASING, type: ANIME, sort: POPULARITY_DESC) {
          id
          title {
            native
          }
          coverImage {
            extraLarge
          }
        }
      }
    }
  `;

  const response = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  const animes: Anime[] = data.data.Page.media.map((anime: AnimeMedia) => ({
    id: anime.id,
    title: anime.title.native,
    imageUrl: anime.coverImage.extraLarge,
  }));

  return (
    <div className="bg-[#30373A] min-h-screen py-8">
      <div className="container mx-auto">
        <div className="flex justify-center gap-6 flex-wrap max-w-[1320px] mx-auto">
          {animes.map((anime) => (
            <div
              key={anime.id}
              className="w-[310px] h-[387px] relative rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={anime.imageUrl}
                alt={anime.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
                sizes="310px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col">
                <h2 className="text-xl font-bold mb-2 text-white">
                  {anime.title}
                </h2>
                <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                  投稿する
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
