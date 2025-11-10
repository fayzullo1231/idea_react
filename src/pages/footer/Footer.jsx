import "./footer.css"
import logo from "../../assets/logo.png"
import youtube from '../../assets/youtube.png'
import insta from '../../assets/insta.png'
import telegram from '../../assets/telegram.png'

export default function Footer() {
  return (
    <footer>
      <div className="container">
          <div className="footer_div">
            <div className="logo_row">
                    <div className="logo_div">
                         <a href="/" className="logo_link">  
                            <img src={logo} alt="" />
                            <h1>IDEA WOOD HOUSE</h1>
                         </a>
                    <p className="mama">Современные домапо технологии фахверк</p>
                    </div>
                <div className="logo_row_uu">
                    <h2>МЫ В СОЦСЕТЯХ</h2>
                        <div className="icons_divv">
                            <a className="icons_div" href="https://t.me/idea_woodhouse_uz">
                              <img src={telegram} alt="" />
                              <p>Telegram</p>
                            </a>
                            <a href="https://www.instagram.com/ideawoodhouse?igsh=NDZ2bmdib2xmaXIx" className="icons_div">
                              <img src={insta} alt="" />
                              <p>Instagram</p>
                            </a >
                            <a href="#" className="icons_div">
                              <img src={youtube} alt=""  />
                              <p>You Tube</p>
                            </a>
                        </div>
                </div>
            </div>     

            <div className="ul_row">
                <ul className="second_ul">
                    <li>
                        <a href="" className="big_li">НАПРАВЛЕНИЯ</a> 
                    </li>    
                    <li>
                        <a href="" className="small_li">Одноэтажные фахверки</a> 
                    </li>
                    <li>
                        <a href="" className="small_li">Двухэтажные фахверки</a> 
                    </li>
                    <li>
                        <a href="" className="small_li">Одноэтажные шале</a> 
                    </li>
                    <li>
                        <a href="" className="small_li">Двухэтажные шале</a> 
                    </li>
                    <li>
                        <a href="" className="small_li">Одноэтажные барны</a> 
                    </li>
                    <li>
                        <a href="" className="small_li">Двухэтажные барны</a> 
                    </li>
                    <li>
                        <a href="" className="small_li">Индивидуальные проекты</a> 
                    </li>
                    <li>
                        <a href="" className="small_li">Гаражи, бани, беседки</a> 
                    </li>
                </ul>
             


                <ul className="kontakt">
                  <li>
                  <a href="" className="big_li komp">КОМПАНИЯ</a>
                  </li>
                  <li>
                    <a href="" className="big_li">КОНТАКТЫ</a>
                  </li>
                  <li>
                    <p className="info">Время работы</p>
                    <p className="mini_p">ПН-ВС <br />10:00 - 20:00</p>
                  </li>
                  <li>
                    <p className="info">Email</p>
                    <a href="#" className="green_p">info@iwh.uz</a>
                  </li>
                  <li>
                    <p className="info">Телефон</p>
                    <a href="tel:+998997011166" className="green_p">+998 99 701-11-66</a>
                  </li>
                </ul>
            </div>
            

         </div>
      </div>
    </footer>
  )
}
