import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    artists: build.query<ARTISTS.ArtistsResponce, ARTISTS.ArtistsRequest>({
      query: () => ({
        url: "/artists",
        method: "GET",
      }),
    }),
    artistsContent: build.query<
      ARTISTS.ArtistsWithIDResponce,
      ARTISTS.ArtistsWithIDRequest
    >({
      query: (artists_id) => ({
        url: `/artists/${artists_id}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useArtistsQuery, useArtistsContentQuery } = api;
