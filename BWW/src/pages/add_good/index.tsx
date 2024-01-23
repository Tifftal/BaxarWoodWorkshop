import { NavLink, useNavigate } from 'react-router-dom';
import './index.scss';
import arrow from '../../assets/img/Arrow 1.png';
import image from '../../assets/img/icons8-фото-96.png'
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

const AddGood = () => {
    const [photos, setPhotos] = useState<any>([]);
    const [inputValues, setInputValues] = useState<Partial<Good>>({});
    const [categories, setCategories] = useState<Category[]>([]);
    const [colors, setColors] = useState<Color[] | undefined>([]);
    const [activeAddColor, setActiveAddColor] = useState("none");
    const [newColor, setNewColor] = useState<Partial<Color>>({});
    const [selectedPhoto, setSelectedPhoto] = useState<any>();
    const navigate = useNavigate();

    const handleSelectColor = (id: any) => {
        setInputValues((prevValues) => ({ ...prevValues, color_id: id }));
    }

    const handleSelectPhoto = (photo: any) => {
        setSelectedPhoto(photo);
        console.log(photo)
    }

    const handleSetActiveAddColor = () => {
        setActiveAddColor("block");
    }

    const AddColor = () => {
        setActiveAddColor("none")
    }

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];

        if (file) {
            setPhotos((prevPhotoLink: any) => [...prevPhotoLink, file])
        }
    };

    const photoLinks = photos.map((file: any) => URL.createObjectURL(file));

    const handleNewColorInputChange = (event: any) => {
        const { name, value } = event.target;
        setNewColor((prevValues) => ({ ...prevValues, [name]: value }));
    };

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

    const AddGood = () => {
        const good = {
            category_id: Number(inputValues.category_id),
            color_id: inputValues.color_id,
            height: Number(inputValues.height),
            information: inputValues.information,
            length: Number(inputValues.length),
            name: inputValues.name,
            price: Number(inputValues.price),
            width: Number(inputValues.width),
            material: inputValues.material,
        }

        axios.post(`/api/good/create`, good)
            .then(response => {
                console.log(response)
                const id = response.data.id_good
                photos.map((photo: any) => {
                    photo === selectedPhoto ? AddImage(id, true, photo) : AddImage(id, false, photo);
                })
                navigate('/BaxarWoodWorkshop/admin')
            })
            .catch(error => {
                console.log(error);
            });
    }

    const AddImage = (id_good: number, mainImg: boolean, fileImg: any) => {
        if (fileImg) {
            const formData = new FormData();
            formData.append('image', fileImg);
            axios.post(`/api/good/${id_good}/image`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
                .then(response => {
                    // console.log(response.data.id_photo);
                    const id_photo = response.data.id_photo;
                    mainImg ?
                        axios.put(`/api/good/update/${id_good}`,
                            {
                                "image1": id_photo
                            })
                            .then(response => {
                                console.log(response)
                            })
                            .catch(error => {
                                console.log(error);
                            })
                        : null;
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    return (
        <div className='add-good'>
            <NavLink to='/BaxarWoodWorkshop/admin'><img src={arrow} />Назад</NavLink>
            <div className='add-content'>
                <div className='add-slider'>
                    <div className='photo-slider'>
                        {
                            photos.length < 1 ?
                                <div className='photo-slider'>
                                    <img style={{ width: "25vw", height: "35vw", border: "1px black dashed", padding: "10vw", objectFit: "contain" }} src={image} />
                                    <img style={{ width: "25vw", height: "35vw", border: "1px black dashed", padding: "10vw", objectFit: "contain" }} src={image} />
                                </div>
                                : photos.length < 2 ?
                                    <div className='photo-slider'>
                                        <img style={{ width: "25vw", height: "35vw", objectFit: "cover" }} src={photoLinks[0]} />
                                        <img style={{ width: "25vw", height: "35vw", border: "1px black dashed", padding: "10vw", objectFit: "contain" }} src={image} />
                                    </div>
                                    : <PhotoSlider photos={photoLinks} />
                        }

                    </div>
                    <p style={{ margin: 0, marginTop: "10px", fontStyle: "italic", fontWeight: 300 }}>Выберете главное фото товара:</p>
                    <div className='photo-panel'>
                        {
                            photos.map((file: any, index: any) => (
                                <button
                                    key={index}
                                    onClick={() => handleSelectPhoto(file)}
                                    className='color-checkbox'
                                    style={{
                                        backgroundColor: "none",
                                        outline: `3px solid ${file === selectedPhoto ? 'rgb(107, 161, 110)' : 'transparent'}`,
                                        border: "none"
                                    }}
                                >
                                    <img src={URL.createObjectURL(file)} key={index} />
                                </button>
                            ))
                        }
                        <label className="input-file">
                            <input
                                type="file"
                                name="file"
                                onChange={handleFileChange}
                            />
                            <span>+</span>
                        </label>
                    </div>

                </div>
                <div className='add-info'>
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
                        <p style={{ marginBottom: "5px" }}>Цвет</p>
                        <div className='choose-color'>
                            {
                                colors?.map((color, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSelectColor(color.id_color)}
                                        className='color-checkbox'
                                        style={{
                                            backgroundColor: color.code,
                                            outline: `2px solid ${color.id_color === inputValues.color_id ? 'rgb(107, 161, 110)' : 'transparent'}`,
                                            border: "none"
                                        }}
                                    >

                                    </button>
                                ))
                            }
                            <button className='new-color-btn' onClick={() => { handleSetActiveAddColor() }}>+</button>
                        </div>
                        <div style={{ marginBottom: "20px", display: activeAddColor }}>
                            <p style={{ display: "flex", flexDirection: "row", gap: "5%", margin: 0 }}>
                                <input
                                    type="text"
                                    name="name"
                                    value={newColor.name || ''}
                                    onChange={handleNewColorInputChange}
                                    placeholder='Название цвета'
                                    style={{ height: "25px" }}
                                />
                                <input
                                    name="code"
                                    value={newColor.code || '#ffffff'}
                                    onChange={handleNewColorInputChange}
                                    type='color'
                                    style={{ padding: 0, height: "25px" }}
                                />
                            </p>
                            <button className="save-color-btn" onClick={() => { AddColor() }}>Сохранить</button>
                        </div>
                        <p>
                            <input
                                type="text"
                                name="material"
                                value={inputValues.material || ''}
                                onChange={handleInputChange}
                                placeholder='Материал'

                            />
                        </p>
                        <p>
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
                    <button className='active' disabled={
                        inputValues.name === undefined ||
                        inputValues.name === '' ||
                        inputValues.category_id === undefined ||
                        inputValues.price === undefined ||
                        inputValues.information === undefined ||
                        inputValues.information === '' ||
                        inputValues.material === undefined ||
                        inputValues.material === '' ||
                        inputValues.color_id === undefined ||
                        inputValues.length === undefined ||
                        inputValues.width === undefined ||
                        inputValues.height === undefined ||
                        photoLinks.length === 0
                    }
                        onClick={() => AddGood()}
                    >Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default AddGood;