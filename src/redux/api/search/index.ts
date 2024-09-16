import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    SearchTracks: build.query<
      SEARCHTRACKS.SearchTracksResponce,
      SEARCHTRACKS.SearchTracksRequest
    >({
      query: (query) => ({
        url: "/search",
        method: "GET",
        params: {
          q: query,
          type: "track",
          limit: 20,
        },
      }),
    }),
  }),
});
export const { useSearchTracksQuery } = api;
