export const fetchAnimes = async () => {
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
  return data.data.Page.media;
};
