import OrderCard from '../../../entities/order_card';
import './index.scss';

const Tab = (props: any) => {
    switch (props.tab) {
        case "personal":
            return (
                <div className="personal">
                    <div className='inputs'>
                        <p>Фамилия</p>
                        <h5>Talankina</h5>
                    </div>
                    <div className='inputs'>
                        <p>Имя</p>
                        <h5>Varvara </h5>
                    </div>
                    <div className='inputs'>
                        <p>Отчесвто</p>
                        <h5>Denisovna</h5>
                    </div>
                    <div className='inputs'>
                        <p>Пол</p>
                        <h5>Женский</h5>
                    </div>
                    <div className='inputs'>
                        <p>Дата рождения</p>
                        <h5>25.11.2002</h5>
                    </div>
                    <div className='inputs'>
                        <p>Страна</p>
                        <h5>Россия</h5>
                    </div>
                    <div className='inputs'>
                        <p>Номер телефона</p>
                        <h5>8-999-111-11-11</h5>
                    </div>
                    <button>Изменить</button>
                </div>
            );
        case "orders":
            return (
                <div className='orders'>
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

export default Tab;