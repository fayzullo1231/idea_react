import './App.css'
import Header from './pages/header/Header'
import Footer from './components/footer/Footer'
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
              <Header />
            </>
          }
        />
        <Route
          path='/proekt' element={
            <>
              <Proekt />
            </>
          }
        />
        <Route
          path='/plan' element={
            <>
              <Plan />
            </>
          }
        />
        <Route
          path='/kompaniya' element={
            <>
              <Kompaniya />
            </>
          }
        />
      </Routes>
      <Footer />

    </>
  )
}

export default App