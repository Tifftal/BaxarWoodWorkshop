import './index.scss';
import photo1 from '../../assets/img/DSC01460.jpg';
import photo2 from '../../assets/img/DSC01784.jpg';
import photo3 from '../../assets/img/DSC03978.jpg';

const OrderCard = () => {
    return (
        <div className='order-card'>
            <div className='header'>
                <h2>Заказ от 07.01.2024</h2>
                <h2>20500 ₽ </h2>
            </div>
            <div className='body'>
                <p style={{ color: "#4285B4" }}>Передано в доставку</p>
                <div className='photos'>
                    <img src={photo1} />
                    <img src={photo2} />
                    <img src={photo3} />
                </div>
            </div>
        </div>
    )
}

export default OrderCard