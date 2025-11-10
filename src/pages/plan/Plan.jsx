import './plan.css'
import logo from '../../assets/logo.png'
import telegram from '../../assets/telegram.png'
import plan1 from '../../assets/plan_img1.png'
import plan2 from '../../assets/plan_img2.png'
import plan3 from '../../assets/plan_img3.png'
import { NavLink } from 'react-router-dom'


export default function Plan() {
  return (
    <div>
      <header className='plan_header'>
                  <div className="container">
                      <nav className="plan_navbar">
                      <div className="divv">
                           <a href="/" className="logo_link">  
                              <img src={logo} alt="" />
                              <h1 className='plan_namee'>IDEA WOOD HOUSE</h1>
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
      
                      <div className="plan_text">
                          <p>ГЛАВНАЯ →  ПЛАНИРОВКИ </p>
                          <h1>ПЛАНИРОВКИ ЗАГОРОДНЫХ ДОМОВ</h1>
                      </div>
                  </div>
              </header>

       
        <main>
          <div className="container">
            <div className="plan_main">
              <ul className="plan_list">
                <li className="plan_li">
                  <div className="plan_textt">
                    <div>
                      <h3>BELLAGIO 400 V01</h3>
                      <p>BELLAGIO IDEA 400</p>
                    </div>
                    <div className='right'>
                      <h3>224 м² · 5 комнат</h3>
                      <p>Клееный брус · 2 этажа</p>
                    </div>
                  </div>
                  <img src={plan1} alt="" />
                </li>
                <li className="plan_li">
                  <div className="plan_textt">
                    <div>
                      <h3>CHALLET 265 V02 M </h3>
                      <p>ШАЛЕ IDEA 265</p>
                    </div>
                    <div className='right' >
                      <h3>265 м² · 5 комнат</h3>
                      <p>Клееный брус · 2 этажа</p>
                    </div>
                  </div>
                  <img src={plan2} alt="" />
                </li>
                <li className="plan_li">
                  <div className="plan_textt">
                    <div>
                      <h3>CHALLET 265 V01 M </h3>
                      <p>ШАЛЕ IDEA 265</p>
                    </div>
                    <div className='right'>
                      <h3>265 м² · 6 комнат</h3>
                      <p>Клееный брус · 2 этажа</p>
                    </div>
                  </div>
                  <img src={plan3} alt="" />
                </li>
                <li className="plan_li">
                  <div className="plan_textt">
                    <div>
                      <h3>BELLAGIO 400 V01</h3>
                      <p>BELLAGIO IDEA 400</p>
                    </div>
                    <div className='right'>
                      <h3>224 м² · 5 комнат</h3>
                      <p>Клееный брус · 2 этажа</p>
                    </div>
                  </div>
                  <img src={plan1} alt="" />
                </li>
                <li className="plan_li">
                  <div className="plan_textt">
                    <div>
                      <h3>CHALLET 265 V02 M </h3>
                      <p>ШАЛЕ IDEA 265</p>
                    </div>
                    <div className='right'>
                      <h3>265 м² · 5 комнат</h3>
                      <p>Клееный брус · 2 этажа</p>
                    </div>
                  </div>
                  <img src={plan2} alt="" />
                </li>
                <li className="plan_li">
                  <div className="plan_textt">
                    <div>
                      <h3>CHALLET 265 V01 M </h3>
                      <p>ШАЛЕ IDEA 265</p>
                    </div>
                    <div className='right'>
                      <h3>265 м² · 6 комнат</h3>
                      <p>Клееный брус · 2 этажа</p>
                    </div>
                  </div>
                  <img src={plan3} alt="" />
                </li>
                <li className="plan_li">
                  <div className="plan_textt">
                    <div>
                      <h3>BELLAGIO 400 V01</h3>
                      <p>BELLAGIO IDEA 400</p>
                    </div>
                    <div className='right'>
                      <h3>224 м² · 5 комнат</h3>
                      <p>Клееный брус · 2 этажа</p>
                    </div>
                  </div>
                  <img src={plan1} alt="" />
                </li>
                <li className="plan_li">
                  <div className="plan_textt">
                    <div>
                      <h3>CHALLET 265 V02 M </h3>
                      <p>ШАЛЕ IDEA 265</p>
                    </div>
                    <div className='right'>
                      <h3>265 м² · 5 комнат</h3>
                      <p>Клееный брус · 2 этажа</p>
                    </div>
                  </div>
                  <img src={plan2} alt="" />
                </li>
                <li className="plan_li">
                  <div className="plan_textt">
                    <div>
                      <h3>CHALLET 265 V01 M </h3>
                      <p>ШАЛЕ IDEA 265</p>
                    </div>
                    <div className='right'>
                      <h3>265 м² · 6 комнат</h3>
                      <p>Клееный брус · 2 этажа</p>
                    </div>
                  </div>
                  <img src={plan3} alt="" />
                </li>
              </ul>

                

          
            </div>
          </div>
        </main>
    </div>
  )
}
