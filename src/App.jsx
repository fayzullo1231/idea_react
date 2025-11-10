import './App.css'
import Header from './pages/header/Header'
import Main from './pages/main/Main'
import Information from './pages/information/Information'
import Infor from './pages/infor2/Infor'
import Footer from './pages/footer/Footer'
import Proekt from './pages/proekt/Proekt'
import Plan from './pages/plan/Plan'
import { Route, Routes } from 'react-router-dom'
import Kompaniya from './pages/kompaniya/Kompaniya'

function App() {

  return (
    <>
      <Routes>
        <Route
        path="/"
        element={
          <>
              <Header/>
              <Main/>
              <Information/>
              <Infor/>
              <Footer/>
          </>
        }
        />
        <Route
        path='/proekt' element={
       <>
         <Proekt/>
        <Information/>
        <Footer/>
       </>
      }
        />
        <Route
        path='/plan' element={
          <>
            <Plan/>
            <Information/>
            <Footer/>
          </>
        }
        />
        <Route
        path='/kompaniya' element={
          <>
          <Kompaniya/>
          <Information/>
          <Footer/>
          </>
        }
        />
      </Routes>
    </>
  )
}

export default App