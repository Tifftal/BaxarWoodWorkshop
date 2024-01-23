import './index.scss';
import koni from '../../assets/img/DSC01460.jpg';

const GoodCard = (props: any) => {
    return (
        <div className='good-card'>
            <img src={props.good.image1_link || koni} />
            <h2>{props.good.name}</h2>
            <p>{props.good.price} ₽</p>
        </div>
    )
}

export default GoodCard;