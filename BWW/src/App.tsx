import { FC } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main'

const App: FC = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
