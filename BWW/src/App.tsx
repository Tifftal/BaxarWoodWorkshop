import '@mantine/core/styles.css';
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
import Test from './pages/test/test';
import { createTheme, MantineProvider } from '@mantine/core';
import Favorites from './pages/favorites';

function App() {
  const theme = createTheme({
    fontFamily: 'Montserrat, sans-serif',
    primaryColor: 'brown',
    colors: {
      'brown': [
        "#f7f5f2",
        "#e9e8e7",
        "#d3cdc9",
        "#beb1a7",
        "#ac998b",
        "#a18a78",
        "#9c826e",
        "#89705c",
        "#7a6350",
        "#6c5442"
      ],
    },
    primaryShade: 8
  });

  return (
    <MantineProvider theme={theme}>
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
          <Route path="/BaxarWoodWorkshop/favorites" element={<Favorites />} />
          <Route path="/BaxarWoodWorkshop/test" element={<Test />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
