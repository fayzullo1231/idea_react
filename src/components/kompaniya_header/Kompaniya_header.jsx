import './kompaniya_header.css'
import Navbar from '../navbar/navbar'


function Kompaniya_header() {
  return (
    <>
       <header className='kompani_header'>
            <div className="container">
                <Navbar />
      
                <div className="kompani_text">
                    <p>ГЛАВНАЯ →  КОМПАНИЯ </p>
                    <h1>О КОМПАНИИ</h1>
                </div>
            </div>
        </header>
    </>
  )
}

export default Kompaniya_header
