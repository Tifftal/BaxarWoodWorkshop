import './index.scss'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
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
import { Drawer, Flex } from '@mantine/core';


const NavBar = () => {
    const [show, setShow] = useState(false);
    const [className, setClassName] = useState('default-nav');

    const handleSetClassName = () => {
        setClassName((prevClassName) => (prevClassName === 'default-nav' ? 'active-nav' : 'default-nav'));
    }

    return (
        <>
            <Drawer opened={show} onClose={() => setShow(false)} className='drop-menu' size="xs">
                <Flex direction={'column'} justify={'space-between'} className='drop-menu-body'>
                    <div>
                        <NavLink to='/BaxarWoodWorkshop/'><img src={main} />Главная</NavLink>
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
                </Flex>
            </Drawer>
            <Flex className='navbar' direction={'row'} align={'center'} justify={'space-between'}>
                <div className='nav-group nav-group-left'>
                    <NavLink to='#' className='dropdown-img' onClick={() => setShow(true)}><img src={menu} /></NavLink>
                    <NavLink to='/BaxarWoodWorkshop/catalog'>Каталог</NavLink>
                </div>
                <div className='nav-group nav-group-center'>
                    <NavLink to='/BaxarWoodWorkshop/'><img src={logo} />Мастерская Бахаря</NavLink>
                </div>
                <div className='nav-group nav-group-right'>
                    <NavLink to='/BaxarWoodWorkshop/account'>Профиль</NavLink>
                    <NavLink to='/BaxarWoodWorkshop/admin'>Управление</NavLink>
                    <NavLink to='#'>Избранное</NavLink>
                    <NavLink to='/BaxarWoodWorkshop/bag'>Корзина</NavLink>
                </div>
            </Flex>
        </>
    );
}

export default NavBar;