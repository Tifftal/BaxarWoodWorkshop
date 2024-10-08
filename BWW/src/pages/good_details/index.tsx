import { NavLink, useParams } from 'react-router-dom';
import './index.scss';
import arrow from '../../assets/img/Arrow 1.png';
import liked from '../../assets/img/icons8-сердце-96-3.png';
import like from '../../assets/img/icons8-сердце-96-2.png';
import { useEffect, useState } from 'react';
import PhotoSlider from '../../widgets/good_slider';
import { getGoodById } from '../../api/good/good';
import { AddToBag } from '../../api/bag/bag';

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
    color_name: string;
    material: string;
    color_code: string;
}

const GoodDetail = () => {
    const [star, setStar] = useState(false);
    const [countInBag, setCountInBag] = useState(false);

    const handleAddToStars = () => {
        setStar((prevStar) => !prevStar);
    }

    const { id } = useParams<{ id: string }>();

    const [data, setData] = useState<Good | undefined>();
    const [photos, setPhotos] = useState<any>([])

    useEffect(() => {
        window.scrollTo(0, 0);
        getGoodById(Number(id))
            .then(response => {
                console.log(response.data)
                setData(response.data.good)
                setCountInBag(response.data.is_in_bag)
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

    const HandleAddToBag = () => {
        if (!countInBag) {
            AddToBag(Number(id))
                .then(res => {
                    console.log(res)
                    setCountInBag(true)
                })
                .catch(e => {
                    console.error(e)
                })
        }
    }

    return (
        <div className='details'>
            <NavLink to='/BaxarWoodWorkshop/catalog'><img src={arrow} />Обратно в каталог</NavLink>
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
                <div className='details-info'>
                    <h1>{data?.name}</h1>
                    <h2>{Number(data?.price)?.toFixed(0)} ₽</h2>
                    <p>{data?.information}</p>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '1vw' }}>
                        <button className='in-bag' onClick={HandleAddToBag}>
                            {
                                countInBag === false ? 'В корзину' : 'Добавлено'
                            }
                        </button>
                        <button className='in-stars' onClick={handleAddToStars}>
                            <img src={star ? liked : like} />
                        </button>
                    </div>
                    <div className='dop-info'>
                        <p>Цвет:<b style={{ borderBottom: `3px solid ${data?.color_code}` }}>{data?.color_name}</b></p>
                        <p>Материал: <b>{data?.material}</b></p>
                        <p>Размер  в см (ДхШхВ): <b>{data?.length.toFixed(1)} х {Number(data?.width).toFixed(1)} х {Number(data?.height).toFixed(1)}</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoodDetail;