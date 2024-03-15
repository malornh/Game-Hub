import { staticGenres } from "../data/genre";

export interface Genre{
    id: number,
    name: string,
    image_background: string
}

const useGenres = () => ({data: staticGenres, isLoading: false, error: null});

export default useGenres;