import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game{
    id: number,
    name: string,
    background_image: string,
    platforms: {platform: Platform}[],
    metacritic: number,
    genres: Genre[],
    rating_top: number
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames