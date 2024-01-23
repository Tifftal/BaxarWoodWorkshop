import { useEffect, useState } from 'react';
import OrderCard from '../../../entities/order_card';
import './index.scss';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import delete_btn from '../../../assets/img/icons8-крестик-78.png';
import edit_btn from '../../../assets/img/icons8-редактировать-96.png';


interface CategoryWithGoods {
    id: number;
    name: string;
    goods: AllGood[];
}

interface AllGood {
    id_good: number;
    name: string;
    price: number;
    category_name: string;
    category_id: string;
    color_name: string;
    material: string;
    color_code: string;
    color_id: string;
    image1_link: string;
    length: number;
    width: number;
    height: number;
    status: string;
    information: string;
    creation_date: string;
    publication_date: string | null;
}


const TabAdmin = (props: any) => {
    const [category_goods, setCategoryGoods] = useState<CategoryWithGoods[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/good/categories/`)
            .then(response => {
                const categories = response.data.categories;
                axios.get(`/api/good/?category=&color=`)
                    .then(response => {
                        const goods = response.data.goods;
                        const categories_arr: CategoryWithGoods[] = [];

                        categories.map((category: any) => {
                            const good_arr: AllGood[] = [];

                            goods.map((good: any) => {
                                good.category_id == category.id_category ? good_arr.push(good) : null;
                            });

                            const category_obj: CategoryWithGoods = {
                                id: category.id_category,
                                name: category.name,
                                goods: good_arr,
                            };

                            categories_arr.push(category_obj);
                        });

                        console.log(categories_arr);
                        setCategoryGoods(categories_arr);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    function formatDateString(inputDate: string | null): string | null {
        // Разбиваем строку с датой
        if (inputDate !== null) {
            const [year, month, day] = inputDate.substring(0, 10).split('-');

            // Словарь с названиями месяцев
            const monthNames: string[] = [
                'янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
            ];

            // Форматирование даты в нужный формат
            const formattedDate: string = `${+day} ${monthNames[+month - 1]} ${year}`;

            return formattedDate;
        }
        else {
            return null;
        }
    }

    switch (props.tab) {
        case "goods":
            return (
                <div className="goods">
                    <div className='btn-panel'>
                        <NavLink to='/BaxarWoodWorkshop/add_good'><button>Добавить товар</button></NavLink>
                    </div>
                    {
                        category_goods?.map((category, index) => (
                            <table className='table' key={index}>
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'center', borderRadius: "8px", background: '#b5a79d' }} colSpan={10}>{category.name}</th>
                                    </tr>
                                    <tr>
                                        {/* <th></th> */}
                                        <th>№</th>
                                        <th>Название</th>
                                        <th>Фото</th>
                                        <th>Цена</th>
                                        <th>Цвет</th>
                                        <th>ДхШхВ в мм</th>
                                        <th>Добавлен</th>
                                        <th>Опубликован</th>
                                        <th>Статус</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        category.goods.map((good, index) => (
                                            <tr key={index} onClick={()=>{navigate(`/BaxarWoodWorkshop/edit/${good.id_good}`)}}>
                                                <td>{good.id_good}</td>
                                                <td>{good.name}</td>
                                                <td><img src={good.image1_link} /></td>
                                                <td>{good.price} ₽</td>
                                                <td><div className="square" style={{ backgroundColor: good.color_code }}></div></td>
                                                <td>{good.length}x{good.width}x{good.height}</td>
                                                <td>{formatDateString(good.creation_date)}</td>
                                                <td>{formatDateString(good.publication_date)}</td>
                                                <td>{good.status}</td>
                                                <td><button className='delete-good-btn'><img src={delete_btn} /></button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        ))
                    }
                </div>
            );
        case "orders":
            return (
                <div className='orders-admin'>
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                </div>
            );
    }
}

export default TabAdmin;