import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './widgets/navbar';
import Main from './pages/main_page';
import Footer from './widgets/footer';
import Catalog from './pages/catalog';
import GoodDetail from './pages/good_details';
import Account from './pages/account';
import Admin from './pages/admin_page';
import AddGood from './pages/add_good';
import EditGood from './pages/edit_good';
import Bag from './pages/bag';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/BaxarWoodWorkshop/" element={<Main />} />
          <Route path="/BaxarWoodWorkshop/catalog/" element={<Catalog />} />
          <Route path="/BaxarWoodWorkshop/details/:id" element={<GoodDetail />} />
          <Route path="/BaxarWoodWorkshop/account" element={<Account />} />
          <Route path="/BaxarWoodWorkshop/admin" element={<Admin />} />
          <Route path="/BaxarWoodWorkshop/add_good" element={<AddGood />} />
          <Route path="/BaxarWoodWorkshop/edit/:id" element={<EditGood />} />
          <Route path="/BaxarWoodWorkshop/bag" element={<Bag />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
