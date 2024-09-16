import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    features: build.query<FEATURES.FeaturedPlaylistsResponce, FEATURES.FeaturedPlaylistsRequest>({
      query: () => ({
        url: "/browse/featured-playlists",
        method: "GET",
      }),
    }),
    // tracksContent: build.query<TRACKS.TracksByResponce, TRACKS.TracksByRequest>({
    //   query: (id) => ({
    //     url: `/tracks/${id}`,
    //     method: "GET",
    //   }),
    // }),
  }),
});
export const { useFeaturesQuery } = api;
