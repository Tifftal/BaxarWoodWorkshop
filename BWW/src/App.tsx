import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './widgets/navbar';
import Main from './pages/mainPage';
import Footer from './widgets/footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/BaxarWoodWorkshop/" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
