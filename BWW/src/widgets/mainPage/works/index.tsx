import './index.scss'

const Works = () => {
    return (
        <div className="works-page">
            <div className='works-title'>
                <h1>Работы</h1>
            </div>
            <div className='works-content'>
                <button>Перейти в каталог <img src='../../img/Arrow 1.png' /></button>
                <section className="card">
                    <div className="card--content">
                        <img src='../../img/DSC06552.jpg'/>
                        <h2>Маски</h2>
                    </div>
                    <div className="card--content">
                        <img src='../../img/DSC05235.jpg'/>
                        <h2>Братины</h2>
                    </div>
                    <div className="card--content">
                        <img src='../../img/DSC04913.jpg'/>
                        <h2>Пряхи</h2>
                    </div>
                    <div className="card--content">
                        <img src='../../img/DSC03978.jpg'/>
                        <h2>Деды</h2>
                    </div>
                    <div className="card--content">
                        <img src='../../img/DSC01460.jpg'/>
                        <h2>Кони</h2>
                    </div>
                    <div className="card--content">
                        <img src='../../img/DSC01784.jpg'/>
                        <h2>Картины</h2>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default Works;