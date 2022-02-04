import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHeros = (heroId) => {
    return axios.get(`http://localhost:4000/superheros/${ heroId }`)
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}

const DynamicParallelQueryPage = ({ heroIds }) => {
    const queryResults = useQueries(
        heroIds.map(id => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHeros(id)
            }
        })
    )

    return <div></div>;
};

export default DynamicParallelQueryPage;
