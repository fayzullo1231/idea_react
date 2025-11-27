import './navbar.css'
import { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import telegram from '../../assets/telegram.png'
import ru from '../../assets/ru.png'
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
    const [burger, setBurger] = useState(false)

    return (
        <div className='container'>
            <nav className="navbar">
                <div className="divvl">
                    <Link to={'/'} >
                        <img src={logo} alt="" className='logo' />
                    </Link>
                    <h1 className='proekt_name'>IDEA WOOD HOUSE</h1>
                </div>

                <ul className="nav_listt">
                    <li><NavLink className="nav_linkk" to="/">МЕНЮ</NavLink></li>
                    <li><NavLink className="nav_linkk" to="/proekt">ПРОЕКТЫ</NavLink></li>
                    <li><NavLink className="nav_linkk" to="/plan">ПЛАНИРОВКИ</NavLink></li>
                    <li><NavLink className="nav_linkk" to="/kompaniya">КОМПАНИЯ</NavLink></li>
                </ul>


                <div className="divv">
                    <button className='nomer_btn'><a href="tel:+998997011166" className='nomer'>+998 99 701-11-66</a></button>
                    <a href="https://t.me/idea_woodhouse_uz"><img src={telegram} alt="" className='ru' /></a>
                    <img src={ru} alt="" className='ru' />
                    <button className='nav_bttn '><a href="tel:+998997011166" className='bttn_text'>Заказать звонок </a></button>
                    <button onClick={() => setBurger(true)} className="menuu"><FaBars /></button>
                </div>

            </nav>
            <div className={`menu_zone  ${burger ? 'active' : ''}`}>
                <div className="menu_divvl">
                    <div>
                        <a href="/" className="logo_link"><img src={logo} alt="" className='logo' /></a>
                        <h1 className='proekt_name'>IDEA WOOD HOUSE</h1>
                    </div>
                    <div className="close_btn"><button onClick={() => setBurger(false)}><IoMdClose /></button></div>
                </div>

                <ul className="menu_list ">
                    <li><NavLink className="nav_linkk" to="/">МЕНЮ</NavLink></li>
                    <li><NavLink className="nav_linkk" to="/proekt">ПРОЕКТЫ</NavLink></li>
                    <li><NavLink className="nav_linkk" to="/plan">ПЛАНИРОВКИ</NavLink></li>
                    <li><NavLink className="nav_linkk" to="/kompaniya">КОМПАНИЯ</NavLink></li>
                </ul>
                <button className='menu_nav_bttn '><a href="tel:+998997011166" className='bttn_text'>Заказать звонок </a></button>
            </div>
            {
                burger ?
                    <div onClick={() => setBurger(false)} className={`${burger ? 'overlay ' : ''}`}></div>
                    :
                    <></>
            }
        </div>
    )
}

export default Navbar
