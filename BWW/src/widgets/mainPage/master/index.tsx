import './index.scss';
import master from '../../../assets/img/DSC06134.jpg';
import tg from '../../../assets/img/icons8-телеграм-100.png';
import vk from '../../../assets/img/icons8-vk-100.png';

const Master = () => {
    return (
        <div className='master'>
            <div>
                <h1>Мастер</h1>
            </div>
            <div className='master-content'>
                <img src={master} />
                <h5>Маска "Название", 2021 г.</h5>
                <div className='master-info'>
                    <div>
                        <p><b>Алексей Блинов (Бахарь) </b>– резчик, художник, этнокультуролог, специалист в области прикладных ремесел.</p>
                        <p>Создатель проекта Окрутники @okrutniki.ru, с него началось возрождение традиционного ряжения в современной России. У современных русских ряженых маски, сделанные Бахарем. Они уже известны своим уникальным стилем – выполнены в традиционной русской технике трехгранной резьбы, с узнаваемый этнической символикой и в то же время в неповторимом авторском стиле.</p>
                    </div>
                    <div>
                        <p>Социальные сети: <img src={vk}/><img src={tg}/></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Master