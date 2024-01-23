import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import './index.scss';
import GoodCard from '../../entities/good_card';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    const [selectedCategory, setCategory] = useState<string>("");
    const [selectedColor, setColor] = useState<string>("")

    useEffect(() => {
        axios.get(`/api/good/?category=${selectedCategory}&color=${selectedColor}`)
            .then(response => {
                console.log(response.data.goods)
                setGoods(response.data.goods)
            })
            .catch(error => {
                console.log(error)
            })
        axios.get(`/api/good/categories/`)
            .then(response => {
                console.log(response.data.categories)
                setCategories(response.data.categories)
            })
            .catch(error => {
                console.log(error)
            })
    }, [selectedCategory, selectedColor]);

    const selectCategory = (value: any) => {
        setCategory(value);
    }

    return (
        <div className='catalog'>
            <NavLink to='/BaxarWoodWorkshop/catalog'><h1>Каталог</h1></NavLink>
            <div className='catalog-category-btn'>
                <button onClick={() => { selectCategory("") }}>Все</button>
                {
                    categories?.map((category, index) => (
                        <button onClick={() => { selectCategory(category.name) }} key={index} >{category.name}</button>
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