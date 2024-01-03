import Navbar from 'react-bootstrap/Navbar';
import './index.scss'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/esm/Offcanvas';
import logo from '../../assets/img/logo-2.png';
import menu from '../../assets/img/icons8-меню.svg';
import education from '../../assets/img/icons8-студент-96.png';
import news from '../../assets/img/icons8-мегафон-96.png';
import article from '../../assets/img/редактирование.png';
import exit from '../../assets/img/выйти.png';
import stars from '../../assets/img/icons8-избранное-96.png';
import bag from '../../assets/img/icons8-корзина-96.png';
import user from '../../assets/img/icons8-пользователь-96.png';
import catalog from '../../assets/img/icons8-каталог-96-2.png';
import main from '../../assets/img/icons8-главная-96.png';


const NavBar = () => {
    const [show, setShow] = useState(false);
    const [className, setClassName] = useState('default-nav');

    const handleSetClassName = () => {
        setClassName((prevClassName) => (prevClassName === 'default-nav' ? 'active-nav' : 'default-nav'));
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="lg" className="navbar" fixed="top">
                <div className='nav-group nav-group-left'>
                    <NavLink to='#' className='dropdown-img' onClick={handleShow}><img src={menu} /></NavLink>
                    <NavLink to='#'>Каталог</NavLink>
                </div>
                <div className='nav-group nav-group-center'>
                    <NavLink to='#'><img src={logo} />Мастерская Бахаря</NavLink>
                </div>
                <div className='nav-group nav-group-right'>
                    <NavLink to='#'>Профиль</NavLink>
                    <NavLink to='#'>Избранное</NavLink>
                    <NavLink to='#'>Корзина</NavLink>
                </div>
            </Navbar>
            <Offcanvas show={show} onHide={handleClose} className='drop-menu'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Меню</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='drop-menu-body'>
                    <div>
                        <NavLink to='#'><img src={main} />Главная</NavLink>
                        <NavLink to='#' onClick={handleSetClassName}><img src={catalog} />Каталог</NavLink>
                        <div className={`drop-menu-content ${className}`}>
                            <NavLink to='#'>Братины</NavLink>
                            <NavLink to='#'>Маски</NavLink>
                            <NavLink to='#'>Пряхи</NavLink>
                            <NavLink to='#'>Кони</NavLink>
                            <NavLink to='#'>Деды</NavLink>
                            <NavLink to='#'>Птицы</NavLink>
                            <NavLink to='#'>Картины</NavLink>
                        </div>
                        <NavLink to='#'><img src={education} />Обучение</NavLink>
                        <NavLink to='#'><img src={news} />Новости</NavLink>
                        <NavLink to='#'><img src={article} />Статьи</NavLink>
                    </div>
                    <div>
                        <NavLink to='#'><img src={stars} />Избранное</NavLink>
                        <NavLink to='#'><img src={bag} />Корзина</NavLink>
                        <NavLink to='#'><img src={user} />Профиль</NavLink>
                        <button><img src={exit} />Выйти</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default NavBar;