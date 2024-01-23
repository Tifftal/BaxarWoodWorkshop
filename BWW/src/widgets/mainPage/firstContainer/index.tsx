import { NavLink } from 'react-router-dom';
import './index.scss'

const FirstContainer = () => {
    return (
        <div className='main-page'>

            <p>Алексей Блинов (Бахарь) - резчик, художник, этнокультуролог,
                специалист в области прикладных ремесел.
            </p>
            <p>
                На этом сайте вы можете ознакомиться с новыми работами
                Бахаря по дереву, задать вопросы, а также приобрести
                уникальные произведения искусства. Здесь вы найдете
                информацию о традиционной резьбе и авторском творчестве
                Алексея Блинова. Добро пожаловать в мир его таланта и уникальных
                творений!
            </p>
            <NavLink to='/BaxarWoodWorkshop/catalog'><button>Перейти в каталог</button></NavLink>
        </div>
    )
}

export default FirstContainer;