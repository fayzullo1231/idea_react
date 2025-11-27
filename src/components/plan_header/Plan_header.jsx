import Navbar from '../../components/navbar/navbar'
import './plan_header.css'

function PLan_header() {
  return (
       <>
       <header className='plan_header'>
                  <div className="container">
                      <Navbar />

                      <div className="plan_text">
                          <p>ГЛАВНАЯ →  ПЛАНИРОВКИ </p>
                          <h1 className='kkk'>ПЛАНИРОВКИ ЗАГОРОДНЫХ ДОМОВ</h1>
                      </div>
                  </div>
        </header>
    </>
  )
}

export default PLan_header
