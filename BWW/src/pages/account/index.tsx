import { useState } from 'react';
import SideBarAccount from '../../widgets/account_sidebar';
import './index.scss';
import Tab from '../../shared/ui/sidebar_account';
import exit from '../../assets/img/icons8-выйти-96-3.png';

const Account = () => {
    const [tab, setTab] = useState("personal");

    return (
        <div className='account'>
            <div className='user-info'>
                <div>
                    <h2>account</h2>
                    <h1>Varvara Talankina</h1>
                    <SideBarAccount setTab={setTab} tab={tab} />
                </div>
                <button className='exit-btn'><img src={exit}/>Выйти</button>
            </div>
            <div className='account-content'>
                <Tab tab={tab} />
            </div>
        </div>
    )
}

export default Account;