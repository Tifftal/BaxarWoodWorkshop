import { NavLink } from 'react-router-dom';
import './index.scss';
import GoodCard from '../../entities/good_card';
import { useEffect, useState } from 'react';
import { getAllGoods } from '../../api/good/good';
import { getAllCategories } from '../../api/category/category';

interface AllGood {
    id_good: number;
    name: string;
    price: number;
}

interface Category {
    id_category: number;
    name: string;
}

const Catalog = () => {
    const [goods, setGoods] = useState<AllGood[] | undefined>();
    const [categories, setCategories] = useState<Category[] | undefined>();
    const [selectedCategory, setSelectedCategory] = useState<{ id: number | null; label: string | null }>({
        id: null,
        label: null
    });

    useEffect(() => {
        getAllCategories()
            .then(response => {
                console.log(response.data)
                setCategories(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    useEffect(() => {
        getAllGoods(selectedCategory.id ? (selectedCategory.id).toString() : undefined)
            .then(response => {
                console.log(response.data)
                setGoods(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [selectedCategory])

    return (
        <div className='catalog'>
            <NavLink to='/BaxarWoodWorkshop/catalog'><h1>Каталог</h1></NavLink>
            <div className='catalog-category-btn'>
                <button
                    style={{ backgroundColor: selectedCategory.id === null ? 'rgba(138, 109, 85, 0.8)' : 'rgba(138, 109, 85, 0.5)' }}
                    onClick={() => { setSelectedCategory({ id: null, label: null }) }}
                >
                    Все
                </button>
                {
                    categories?.map((category, index) => (
                        <button
                            style={{ backgroundColor: selectedCategory.id === category.id_category ? 'rgba(138, 109, 85, 0.8)' : 'rgba(138, 109, 85, 0.5)' }}
                            onClick={() => { setSelectedCategory({ id: category.id_category, label: category.name }) }}
                            key={index}
                        >
                            {category.name}
                        </button>
                    ))
                }
            </div>
            <div className='catalog-content'>
                {
                    goods?.map((good, index) => (
                        <NavLink to={`/BaxarWoodWorkshop/details/${good.id_good}`} key={index}><GoodCard good={good} /></NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default Catalog;