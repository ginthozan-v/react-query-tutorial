import { useQuery } from "react-query";
import axios from "axios";

export const useSuperHeroData = ({ heroId }) => {
    return useQuery(['super-hero', heroId], () => {
        return axios.get(`http://localhost:4000/superheros/${ heroId }`)
    })
}