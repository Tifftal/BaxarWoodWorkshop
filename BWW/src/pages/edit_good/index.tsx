import { NavLink, useParams } from 'react-router-dom';
import './index.scss';
import arrow from '../../assets/img/Arrow 1.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PhotoSlider from '../../widgets/good_slider';

interface Good {
    category_id: number;
    color_id: number;
    creation_date: string;
    height: number;
    id_good: number;
    information: string;
    length: number;
    name: string;
    price: number;
    publication_date: string;
    status: string;
    width: number;
    category: string;
    color: string;
    material: string;
    color_code: string;
}

interface Category {
    id_category: number;
    name: string;
}

interface Color {
    id_color: number;
    name: string;
    code: string;
}


const EditGood = () => {
    const [inputValues, setInputValues] = useState<Partial<Good>>({});
    const [categories, setCategories] = useState<Category[]>([]);
    const [colors, setColors] = useState<Color[] | undefined>([]);
    const { id } = useParams<{ id: string }>();

    // const [data, setData] = useState<Good | undefined>();
    const [photos, setPhotos] = useState<any>([]);

    useEffect(() => {
        axios.get(`/api/good/categories/`)
            .then(response => {
                setCategories(response.data.categories)
            })
            .catch(error => {
                console.log(error);
            });
        axios.get(`/api/good/colors/`)
            .then(response => {
                setColors(response.data.colors)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get(`/api/good/${id}`)

            .then(response => {
                console.log(response.data)
                setInputValues(response.data.good)
                const photoArray: ((url: string) => string)[] = []
                response.data.photos.map((photo: string) => {
                    photoArray.push(photo.link)
                })
                setPhotos(photoArray)
            })

            .catch(error => {
                console.log(error)
            })
    }, [])

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return (
        <div className='details'>
            <NavLink to='/BaxarWoodWorkshop/admin'><img src={arrow} />К панели администратора</NavLink>
            <div className='details-content'>
                <div className='details-slider'>
                    <div className='photo-slider'>
                        <PhotoSlider photos={photos} />
                    </div>
                    <div className='photo-panel'>
                        {
                            photos.map((photo: any, index: any) => (
                                <img src={photo} key={index} />
                            ))
                        }
                    </div>
                </div>
                <div className='edit-info'>
                    <h1>
                        <input
                            type="text"
                            placeholder="Название"
                            name="name"
                            value={inputValues.name || ''}
                            onChange={handleInputChange}
                        />
                    </h1>
                    <h2>
                        <input
                            type="text"
                            placeholder='Цена ₽'
                            name="price"
                            value={inputValues.price || ''}
                            onChange={handleInputChange}
                        />
                    </h2>
                    <p style={{ margin: 0 }}>
                        <select
                            value={inputValues.category_id || ''}
                            name='category_id'
                            onChange={handleInputChange}

                        >
                            <option>Категория</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category.id_category}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </p>
                    <p>
                        <textarea
                            placeholder='Описание'
                            value={inputValues.information || ''}
                            name='information'
                            onChange={handleInputChange}
                        />
                    </p>
                    <div className='dop-info'>
                        <p>Цвет:<b style={{ borderBottom: `3px solid ${inputValues.color_code}` }}>{inputValues.color}</b></p>
                        <p>
                            Материал:
                            <input
                                type="text"
                                name="material"
                                value={inputValues.material || ''}
                                onChange={handleInputChange}
                                placeholder='Материал'

                            />
                        </p>
                        <p>
                            Размер (ДхШхВ в мм):
                            <input
                                type="text"
                                name="length"
                                value={inputValues.length || ''}
                                onChange={handleInputChange}
                                placeholder='Длина в мм'
                            />
                            <input
                                type="text"
                                name="width"
                                value={inputValues.width || ''}
                                onChange={handleInputChange}
                                placeholder='Ширина в мм'
                                style={{ marginTop: "5px" }}
                            />
                            <input
                                type="text"
                                name="height"
                                value={inputValues.height || ''}
                                onChange={handleInputChange}
                                placeholder='Высота в мм'
                                style={{ marginTop: "5px" }}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditGood;