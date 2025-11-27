import "./footer.css"
import logo from "../../assets/logo.png"
import youtube from "../../assets/youtube.png"
import insta from "../../assets/insta.png"
import telegram from "../../assets/telegram.png"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer_container">

        {/* LEFT BLOCK (LOGO + SOCIAL) */}
        <div className="footer_left">
          <div className="footer_logo_block">
            <img className="footer_logo" src={logo} alt="logo" />

            <div className="footer_brand">
              <h1>IDEA WOOD HOUSE</h1>
              <p>Современные дома по технологии фахверк</p>
            </div>
          </div>

          <div className="footer_socials">
            <a className="social_item" href="#">
              <img src={telegram} />
              <span>Телеграм</span>
            </a>
            <a className="social_item" href="#">
              <img src={insta} />
              <span>Инстаграм</span>
            </a>
            <a className="social_item" href="#">
              <img src={youtube} />
              <span>Ютуб</span>
            </a>
          </div>
        </div>

        {/* CENTER BLOCK (НАПРАВЛЕНИЯ) */}
        <div className="footer_middle">
          <h3>НАПРАВЛЕНИЯ</h3>
          <ul>
            <li>Одноэтажные фахверки</li>
            <li>Двухэтажные фахверки</li>
            <li>Одноэтажные шале</li>
            <li>Двухэтажные шале</li>
            <li>Одноэтажные барны</li>
            <li>Двухэтажные барны</li>
            <li>Индивидуальные проекты</li>
            <li>Гаражи, бани, беседки</li>
          </ul>
        </div>

        {/* RIGHT BLOCK (COMPANY INFO) */}
        <div className="footer_right">
          <h3>КОМПАНИЯ</h3>
          <h4>КОНТАКТЫ</h4>

          <div className="contact_block">
            <p className="label">Время работы</p>
            <p className="value">ПН-ВС<br />10:00 – 20:00</p>
          </div>

          <div className="contact_block">
            <p className="label">Email</p>
            <a className="contact_link" href="mailto:info@iwh.uz">info@iwh.uz</a>
          </div>

          <div className="contact_block">
            <p className="label">Телефон</p>
            <a className="contact_link" href="tel:+998997011166">+998 99 701-11-66</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
