import { useState } from "react";
import { Link } from "react-router-dom";
import { useAddSuperHeroData, useSuperHerosData } from "../hooks/useSuperHerosData";

const RQSuperHeroesPage = () => {
    const [name, setName] = useState('');
    const [alterEgo, setAlterEgo] = useState('');

    const { isLoading, data, isError, error } = useSuperHerosData();
    const { mutate: addHero } = useAddSuperHeroData();

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    const handleAddHeroClick = () => {
        const hero = { name, alterEgo };
        addHero(hero)
    }

    return (
        <div>
            <h2>RQSuperHeroesPage</h2>
            <div>
                <input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type='text'
                    value={alterEgo}
                    onChange={e => setAlterEgo(e.target.value)}
                />
                <button onClick={handleAddHeroClick}>Add Hero</button>
            </div>
            {data?.data.map(hero => {
                return <div key={hero.id}>
                    <Link to={`/rq-super-heroes/${ hero.id }`} >{hero.name}</Link>
                </div>
            })}
        </div>
    );
};

export default RQSuperHeroesPage;