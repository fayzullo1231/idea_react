import './proekt_header.css'
import Navbar from '../navbar/navbar'

function Proekt_header() {
  return (
    <>
       <header className='proekt_header'>
            <div className="container">
                <Navbar />

                <div className="header_text">
                    <h3 className='mmm'>ГЛАВНАЯ →  ПРОЕКТЫ </h3>
                    <h2 className='kkk'>ПРОЕКТЫ ЗАГОРОДНЫХ ДОМОВ</h2>
                </div>
            </div>
        </header>
    </>
  )
}

export default Proekt_header
