import './index.scss';
import koni from '../../assets/img/DSC01460.jpg';

const GoodCard = (props: any) => {
    return (
        <div className='good-card'>
            <img src={props.good.image_link || koni} />
            <h2>{props.good.name}</h2>
            <p>{Number(props.good.price).toFixed(0)} ₽</p>
        </div>
    )
}

export default GoodCard;