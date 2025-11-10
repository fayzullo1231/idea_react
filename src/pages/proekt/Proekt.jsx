import './proekt.css'
import logo from '../../assets/logo.png'
import telegram from '../../assets/telegram.png'
import proekt1 from '../../assets/proekt_img1.png'
import proekt2 from '../../assets/proekt_img2.png'
import proekt3 from '../../assets/proekt_img3.png'
import proekt4 from '../../assets/proekt_img4.png'
import proekt5 from '../../assets/proekt_img5.png'
import proekt6 from '../../assets/proekt_img6.png'
import proekt7 from '../../assets/proekt_img7.png'
import proekt8 from '../../assets/proekt_img8.png'
import { NavLink } from 'react-router-dom'

export default function Proekt() {
  return (
     <div>
            <header className='proekt_header'>
            <div className="container">
                <nav className="proekt_navbar">
                <div className="divv">
                  <a href="/" className="logo_link">  
                    <img src={logo} alt="" className='logo'/>
                    <h1 className='proekt_namee'>IDEA WOOD HOUSE</h1>
               </a>
                </div>
                    <ul className="nav_list">
                        <li>
                            <NavLink to="/"> <p className="nav_link">МЕНЮ</p></NavLink>
                        </li>
                        <li>
                            <NavLink to="/proekt"><p className="nav_link">ПРОЕКТЫ</p></NavLink>
                        </li>
                        <li>
                            <NavLink to="/plan"><p className="nav_link">ПЛАНИРОВКИ</p></NavLink>

                        </li>
                        <li>
                            
                            <NavLink to="/kompaniya"><p className="nav_link">КОМПАНИЯ</p></NavLink>
                        </li>
                       
                    </ul>
                        <div className="divv">
                            <p className='nomer'>+998 99 701-11-66</p>
                            <a href="https://t.me/idea_woodhouse_uz"><img src={telegram} alt="" /></a>
                            <a href="tel:+998997011166"><button className='nav_btn'>Заказать звонок</button></a>
                            <p className="menu">≡</p>

                        </div>
                </nav>

                <div className="header_text">
                    <h3 className='mmm'>ГЛАВНАЯ →  ПРОЕКТЫ </h3>
                    <h2 className='kkk'>ПРОЕКТЫ ЗАГОРОДНЫХ ДОМОВ</h2>
                </div>
            </div>
        </header>
        <main>
            <div className="container">
                <div className="proekt_main">
                    <ul className="proekt_list">
                        <li className='proekt_li'>
                            <h3>ОДНОЭТАЖНЫЕ ФАХВЕРКИ</h3>
                            <img src={proekt1} alt="" />
                            <p>3 ПРОЕКТА · 8 ПЛАНИРОВОК </p>
                        </li>
                        <li className='proekt_li'>
                            <h3>ДВУХЭТАЖНЫЕ ФАХВЕРКИ</h3>
                            <img src={proekt2} alt="" />
                            <p>5 ПРОЕКТА · 23 ПЛАНИРОВОК  </p>
                        </li>
                         <li className='proekt_li'>
                            <h3>ОДНОЭТАЖНЫЕ ШАЛЕ</h3>
                            <img src={proekt3} alt="" />
                            <p>3 ПРОЕКТА · 8 ПЛАНИРОВОК  </p>
                        </li>
                          <li className='proekt_li'>
                            <h3>ОДНОЭТАЖНЫЕ ШАЛЕ</h3>
                            <img src={proekt4} alt="" />
                            <p>3 ПРОЕКТА · 11 ПЛАНИРОВОК </p>
                        </li>
                        <li className='proekt_li'>
                            <h3>ОДНОЭТАЖНЫЕ БАРНЫ</h3>
                            <img src={proekt5} alt="" />
                            <p>6 ПРОЕКТА · 7 ПЛАНИРОВОК  </p>
                        </li>
                        <li className='proekt_li'>
                            <h3>ДВУХЭТАЖНЫЕ БАРНЫ</h3>
                            <img src={proekt6} alt="" />
                            <p>4 ПРОЕКТА · 8 ПЛАНИРОВОК  </p>
                        </li>
                          <li className='proekt_li'>
                            <h3>ИНДИВИДУАЛЬНЫЕ ПРОЕКТЫ</h3>
                            <img src={proekt7} alt="" />
                            <p>7 ПРОЕКТА · 5 ПЛАНИРОВОК  </p>
                        </li>
                        <li className='proekt_li'>
                            <h3>ГАРАЖИ, БАНИ, БЕСЕДКИ</h3>
                            <img src={proekt8} alt="" />
                            <p>1 ПРОЕКТА · 1 ПЛАНИРОВОК </p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
     </div>
  )
}
