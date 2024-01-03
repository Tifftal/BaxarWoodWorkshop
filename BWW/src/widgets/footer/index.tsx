import { NavLink } from 'react-router-dom';
import './index.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='logo-footer'>
                    <img src='../../img/logo-2.png' />
                    <div>
                        <h2>Мастерская Бахаря</h2>
                        <h3>Традиционная резьба и авторское творчество Алексея Блинова</h3>
                    </div>
                </div>
                <div className='footer-menu'>
                    <NavLink to='#'>Новости</NavLink>
                    <NavLink to='#'>Обучение</NavLink>
                    <NavLink to='#'>О мастере</NavLink>
                    <NavLink to='#'>Статьи</NavLink>
                    <NavLink to='#'>Контакты</NavLink>
                </div>
                <div className='footer-menu'>
                    <NavLink to='#'>Каталог</NavLink>
                    <NavLink to='#'>Профиль</NavLink>
                    <NavLink to='#'>Корзина</NavLink>
                    <NavLink to='#'>Избранное</NavLink>
                </div>
                <div className='footer-form'>
                    <p>Возникли проблемы?</p>
                    <p>Напишите в поддрежку, и мы постараемся Вам помочь.</p>
                    <input type='text' name='email' placeholder='Адрес электронной почты'/>
                    <input type='text' name='message' placeholder='Сообщение'/>
                    <button>Отправить</button>
                </div>
            </div>
            <div className='social'>
                <p>© 2015</p>
                <p>baxarwoodworkshop@gmail.com</p>
                <img src='../../img/icons8-телеграм-100-2.png' />
                <img src='../../img/icons8-instagram-100-2.png' />
                <img src='../../img/icons8-vk-100-2.png' />
            </div>
        </div>
    )
}

export default Footer;