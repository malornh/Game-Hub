import useData from "./useData";

interface Platform{
    id: number,
    name: string,
}

const usePlaforms = ()=> useData<Platform>('/platforms/lists/parents');

export default usePlaforms