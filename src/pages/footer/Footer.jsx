import "./footer.css"
import logo from "../../assets/logo.png"
import youtube from "../../assets/youtube.png"
import insta from "../../assets/insta.png"
import telegram from "../../assets/telegram.png"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_wrapper">
          {/* Logo and description section */}
          <div className="footer_brand">
            <a href="/" className="logo_link">
              <img src={logo || "/placeholder.svg"} alt="IDEA WOOD HOUSE Logo" />
              <h1 className="footer_name">IDEA WOOD HOUSE</h1>
            </a>
            <p className="brand_description">Современные домапо технологии фахверк</p>
          </div>

          {/* Directions section */}
          <div className="footer_column">
            <h3 className="column_title">НАПРАВЛЕНИЯ</h3>
            <ul className="footer_list">
              <li>
                <a href="" className="footer_link">
                  Одноэтажные фахверки
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Двухэтажные фахверки
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Одноэтажные шале
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Двухэтажные шале
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Одноэтажные барны
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Двухэтажные барны
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Индивидуальные проекты
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Гаражи, бани, беседки
                </a>
              </li>
            </ul>
          </div>

          {/* Company section */}
          <div className="footer_column">
            <h3 className="column_title">КОМПАНИЯ</h3>
            <ul className="footer_list footer_links_list">
              <li>
                <a href="" className="footer_link">
                  О компании
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Блог
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and social section */}
          <div className="footer_column">
            <h3 className="column_title">КОНТАКТЫ</h3>
            <div className="contact_info">
              <div className="info_item">
                <p className="info_label">Время работы</p>
                <p className="info_value">
                  ПН-ВС
                  <br />
                  10:00 - 20:00
                </p>
              </div>
              <div className="info_item">
                <p className="info_label">Email</p>
                <a href="mailto:info@iwh.uz" className="info_value contact_link">
                  info@iwh.uz
                </a>
              </div>
              <div className="info_item">
                <p className="info_label">Телефон</p>
                <a href="tel:+998997011166" className="info_value contact_link">
                  +998 99 701-11-66
                </a>
              </div>
            </div>

            {/* Social media section */}
            <div className="social_section">
              <h3 className="column_title social_title">МЫ В СОЦСЕТЯХ</h3>
              <div className="social_icons">
                <a href="https://t.me/idea_woodhouse_uz" className="social_link" title="Telegram">
                  <img src={telegram || "/placeholder.svg"} alt="Telegram" />
                  <span>Telegram</span>
                </a>
                <a
                  href="https://www.instagram.com/ideawoodhouse?igsh=NDZ2bmdib2xmaXIx"
                  className="social_link"
                  title="Instagram"
                >
                  <img src={insta || "/placeholder.svg"} alt="Instagram" />
                  <span>Instagram</span>
                </a>
                <a href="#" className="social_link" title="YouTube">
                  <img src={youtube || "/placeholder.svg"} alt="YouTube" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
