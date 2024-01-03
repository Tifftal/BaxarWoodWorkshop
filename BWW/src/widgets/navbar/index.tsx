import Navbar from 'react-bootstrap/Navbar';
import './index.scss'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/esm/Offcanvas';

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
                    <NavLink to='#' className='dropdown-img' onClick={handleShow}><img src='../../img/icons8-меню.svg' /></NavLink>
                    <NavLink to='#'>Каталог</NavLink>
                </div>
                <div className='nav-group nav-group-center'>
                    <NavLink to='#'><img src='../../img/logo-2.png' />Мастерская Бахаря</NavLink>
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
                        <NavLink to='#'><img src='../../img/icons8-главная-96.png' />Главная</NavLink>
                        <NavLink to='#' onClick={handleSetClassName}><img src='../../img/icons8-каталог-96-2.png' />Каталог</NavLink>
                        <div className={`drop-menu-content ${className}`}>
                            <NavLink to='#'>Братины</NavLink>
                            <NavLink to='#'>Маски</NavLink>
                            <NavLink to='#'>Пряхи</NavLink>
                            <NavLink to='#'>Кони</NavLink>
                            <NavLink to='#'>Деды</NavLink>
                            <NavLink to='#'>Птицы</NavLink>
                            <NavLink to='#'>Картины</NavLink>
                        </div>
                        <NavLink to='#'><img src='../../img/icons8-студент-96.png' />Обучение</NavLink>
                        <NavLink to='#'><img src='../../img/icons8-мегафон-96.png' />Новости</NavLink>
                        <NavLink to='#'><img src='../../img/редактирование.png' />Статьи</NavLink>
                    </div>
                    <div>
                        <NavLink to='#'><img src='../../img/icons8-избранное-96.png' />Избранное</NavLink>
                        <NavLink to='#'><img src='../../img/icons8-корзина-96.png' />Корзина</NavLink>
                        <NavLink to='#'><img src='../../img/icons8-пользователь-96.png' />Профиль</NavLink>
                        <button><img src='../../img/выйти.png' />Выйти</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default NavBar;