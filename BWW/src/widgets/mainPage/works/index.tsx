import './index.scss';
import arrow from '../../../assets/img/Arrow 1.png';
import mask from '../../../assets/img/DSC06552.jpg';
import bratina from '../../../assets/img/DSC05235.jpg';
import prahi from '../../../assets/img/DSC04913.jpg';
import ded from '../../../assets/img/DSC03978.jpg';
import koni from '../../../assets/img/DSC01460.jpg';
import kartina from '../../../assets/img/DSC01784.jpg';

const Works = () => {
    return (
        <div className="works-page">
            <div className='works-title'>
                <h1>Работы</h1>
            </div>
            <div className='works-content'>
                <button>Перейти в каталог <img src={arrow} /></button>
                <section className="card">
                    <div className="card--content">
                        <img src={mask}/>
                        <h2>Маски</h2>
                    </div>
                    <div className="card--content">
                        <img src={bratina}/>
                        <h2>Братины</h2>
                    </div>
                    <div className="card--content">
                        <img src={prahi}/>
                        <h2>Пряхи</h2>
                    </div>
                    <div className="card--content">
                        <img src={ded}/>
                        <h2>Деды</h2>
                    </div>
                    <div className="card--content">
                        <img src={koni}/>
                        <h2>Кони</h2>
                    </div>
                    <div className="card--content">
                        <img src={kartina}/>
                        <h2>Картины</h2>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default Works;