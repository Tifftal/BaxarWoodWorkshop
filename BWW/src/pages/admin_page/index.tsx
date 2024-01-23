import { useState } from 'react';
import './index.scss';
import exit from '../../assets/img/icons8-выйти-96-3.png';
import SideBarAdmin from '../../widgets/admin_sidebar';
import TabAdmin from '../../shared/ui/sidebar_admin';

const Admin = () => {
    const [tab, setTab] = useState("goods");
    
    return (
        <div className='admin-page'>
            <div className='admin-info'>
                <div>
                    <h2>admin panel</h2>
                    <h1>Varvara Talankina</h1>
                    <SideBarAdmin setTab={setTab} tab={tab} />
                </div>
                <button className='exit-btn'><img src={exit} />Выйти</button>
            </div>
            <div className='account-content'>
                <TabAdmin tab={tab} />
            </div>
        </div>
    )
}

export default Admin;