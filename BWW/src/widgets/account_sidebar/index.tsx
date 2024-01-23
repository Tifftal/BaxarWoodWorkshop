import { useState } from 'react';
import './index.scss';

const SideBarAccount = (props: any) => {
    const [active, setActive] = useState('personal');

    const handleActive = (tab: any) => {
        setActive(tab);
        props.setTab(tab);
    }

    return (
        <div className='account-sidebar'>
            <button
                onClick={() => { handleActive("personal") }}
                style={{ fontWeight: active === "personal" ? 500 : 400 }}
            >
                Персональные данные</button>
            <button
                onClick={() => { handleActive("orders") }}
                style={{ fontWeight: active === "orders" ? 500 : 400 }}
            >
                Заказы</button>
        </div>
    )
}

export default SideBarAccount;