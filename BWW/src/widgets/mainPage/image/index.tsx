import './index.scss';
import image from '../../../assets/img/DSC05384.jpg'

const Image = () => {
    return (
        <div className='image'>
            <img src={image}/>
        </div>
    )
}

export default Image;