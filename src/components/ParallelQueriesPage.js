import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4000/superheros')
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}

const ParallelQueriesPage = () => {
    const { data: superHeros } = useQuery('super-heros', fetchSuperHeros)
    const { data: friends } = useQuery('friends', fetchFriends)

    return <div></div>;
};

export default ParallelQueriesPage;
