import { useState } from 'react';
import './index.scss';

const SideBarAdmin = (props: any) => {
    const [active, setActive] = useState('goods');

    const handleActive = (tab: any) => {
        setActive(tab);
        props.setTab(tab);
    }

    return (
        <div className='account-sidebar'>
            <button
                onClick={() => { handleActive("goods") }}
                style={{ fontWeight: active === "goods" ? 500 : 400 }}
            >
                Товары</button>
            <button
                onClick={() => { handleActive("orders") }}
                style={{ fontWeight: active === "orders" ? 500 : 400 }}
            >
                Заказы</button>
        </div>
    )
}

export default SideBarAdmin;