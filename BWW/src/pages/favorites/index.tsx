import { NavLink } from 'react-router-dom';
import './index.scss';
import GoodCard from '../../entities/good_card';
import { useEffect, useState } from 'react';
import { getAllGoods } from '../../api/good/good';

interface AllGood {
    id_good: number;
    name: string;
    price: number;
}

const Favorites = () => {
    const [goods, setGoods] = useState<AllGood[] | undefined>();

    useEffect(() => {
        getAllGoods(undefined)
            .then(response => {
                console.log(response.data)
                setGoods(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className='favorites'>
            <NavLink to='/BaxarWoodWorkshop/favorites'><h1>Избранное</h1></NavLink>
            <div className='favorites-content'>
                {
                    goods?.map((good, index) => (
                        <NavLink to={`/BaxarWoodWorkshop/details/${good.id_good}`} key={index}><GoodCard good={good} /></NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default Favorites