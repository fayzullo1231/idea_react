import './header.css'
import logo from '../../assets/logo.png'
import telegram from '../../assets/telegram.png'
import ru from '../../assets/ru.png'
import { Link, NavLink } from 'react-router-dom'


 function Header() {
  return (
    <header className='page_header'>
        <div className="container">
            <nav className="navbar">
               <div className="divv">
                 <a href="/" className='logo_link'>
                 <img src={logo} alt=""  className='logo'/>
                 <h1 className='proekt_name'>IDEA WOOD HOUSE</h1>
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
                        <Link to="tel:+998997011166"><p className='nomer'>+998 99 701-11-66</p></Link>
                    <a href="https://t.me/idea_woodhouse_uz"><img src={telegram} alt="" className='ru' /></a>
                    <div className="language_div">
                        <img src={ru} alt=""  className='ru'/>
                        <p>▼</p>
                    </div>
                    <a href="tel:+998997011166"><button className='nav_btn'>Заказать звонок </button></a>
                    <p className="menu">≡</p>

                    </div>

            </nav>

            <div className="header_text">
                <h3 className='mmm'>СТРОИТЕЛЬСТВО ЗАГОРОДНЫХ ДОМОВ</h3>
                <h2 className='kkk'>СОВРЕМЕННЫЕ ДОМА ПО ТЕХНОЛОГИИ ФАХВЕРК</h2>
            </div>
        </div>
    </header>
  )
}


export default Header
