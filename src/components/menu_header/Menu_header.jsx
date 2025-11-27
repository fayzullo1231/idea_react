import React from 'react'
import Navbar from '../navbar/navbar'
import './menu_header.css'


function Menu_header() {
  return (
    <div>
       <header className='page_header'>
            <div className="container">
                <Navbar />

                <div className="header_text">
                    <h3 className='mmm'>СТРОИТЕЛЬСТВО ЗАГОРОДНЫХ ДОМОВ</h3>
                    <h2 className='kkk'>СОВРЕМЕННЫЕ ДОМА ПО ТЕХНОЛОГИИ ФАХВЕРК</h2>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Menu_header
