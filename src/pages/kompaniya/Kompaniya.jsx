import './kompaniya.css'
import logo from '../../assets/logo.png'
import telegram from '../../assets/telegram.png'
import whatsup from '../../assets/whatapp.png'
import komp1 from '../../assets/komp_img1.png'
import komp2 from '../../assets/komp_img2.png'
import star from '../../assets/star.png'
import yandex from '../../assets/yandex.png'
import domklik from '../../assets/domklik.png'
import dom from '../../assets/dom.png'
import part1 from '../../assets/part1.png'
import part2 from '../../assets/part2.png'
import part3 from '../../assets/part3.png'
import part4 from '../../assets/part4.png'
import part5 from '../../assets/part5.png'
import part6 from '../../assets/part6.png'
import { NavLink } from 'react-router-dom'

export default function Kompaniya() {
  return (
    <div>
      <header className='kompani_header'>
                  <div className="container">
                      <nav className="kompani_navbar">
                      <div className="divv">
                        <a href="/" className="logo_link">  
                            <img src={logo} alt="" />
                            <h1 className='kompani_namee'>IDEA WOOD HOUSE</h1>
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
      
                      <div className="kompani_text">
                          <p>ГЛАВНАЯ →  КОМПАНИЯ </p>
                          <h1>О КОМПАНИИ</h1>
                      </div>
                  </div>
              </header>

              <main>
                <div className="container">
                    <div className="komp1_div">
                        <div className="komp1_text">
                            <h3>ВИДЕНИЕ И МИССИЯ</h3>
                            <p>Наша миссия - создавать дома,отражающие образ жизни ихвладельцев.Наша философия - сохранять гармонию между человеком, домом и природой.В каждом  проекте учитываем особенностиучастка и потребности жильцов.</p>
                        </div>
                        <div className="komp1_img">
                            <img src={komp1} alt="" />
                        </div>
                    </div>

                       <div className="komp1_div">
                        
                        <div className="komp1_img">
                            <img src={komp2} alt="" />
                        </div>
                        
                        <div className="komp1_text">
                            <h3>ИСТОРИЯ КОМПАНИИ</h3>
                            <p>Взяв за основу многолетний опытстроительства и скрупулезный европейскийподход, мы создали инструкцию по сборкедома подобно шкафу из Икеи.Это позволило добиться оптимальногосочетания цена/качество/сроки.</p>
                        </div>
                        
                    </div>

                      <div className="tex">
                            <h1 className='tex_name'>ТЕХНОЛОГИЯ ФАХВЕРК</h1>
                            <ul className="tex_list">
                                    <li className="tex_li">
                                    <h2>Наследия истории</h2>
                                    <p>Фахверки имеют более чем 500 - летнюю историю  иявляются ярким примеромтрадиционной немецкойархитектуры, сохранившейсяда наших дней.</p>
                                    </li>
                                    <li className="tex_li">
                                    <h2>Атмосферва</h2>
                                    <p>Панорамные окна создаютатмосферу наполненногосветом пространства, обеспечивая максимальнуюосвещенность и связь сокружающей природой.</p>
                                    </li>
                                    <li className="tex_li">
                                    <h2>Уникальный стиль</h2>
                                    <p>Деревянные балки образуютжесткий каркас, где каждыйэлемент работает в единойсистеме, обеспечиваяисключительную прочность инадежность будущего дома.</p>
                                    </li>
                                     <li className="tex_li">
                                    <h2>Индивидуальность</h2>
                                    <p>Фахверк - уникальнаятехнология, где отсутствуютнесущие стены. Создавайтепространство мечты,воплощая любимые идеи впланировке вашего дома.</p>
                                    </li>
                            </ul>
                     </div>


                     <div className="price">
                        <div className="price_name">КЛИЕНТЫ ЦЕНЯТ НАШУ РАБОТУ</div>
                        <ul className="price_list">
                            <li className="price_li">
                                <div className="top">
                                    <img src={yandex} alt="" className='lol yan' />
                                        <div className="top_right za">
                                            <img src={star} alt="" />
                                            <h1>5,0</h1>
                                            <p className="iz">из5</p>
                                            <p className='under_text'>на основе 92 отзывов</p>
                                        </div>
                                </div>
                                <button className="price_btn">Прочитать отзывы на агрегатор</button>
                            </li>
                              <li className="price_li">
                                <div className="top">
                                    <img src={domklik} alt="" className='lol po' />
                                    <div className="top_lol">
                                        <div className="top_right">
                                            <img src={star} alt="" />
                                            <h1>4,9</h1>
                                            <p className="iz">из5</p>
                                            <p className='under_text'>на основе 9 отзывов</p>
                                        </div>
                                    <div>
                                    </div>

                                    </div>
                                </div>
                                <button className="price_btn">Прочитать отзывы на агрегатор</button>
                            </li>
                              <li className="price_li">
                                <div className="top">
                                    <img src={dom} alt="" className='lol po'/>
                                    <div className="top_lol">
                                        <div className="top_right">
                                            <img src={star} alt="" />
                                            <h1>4,8</h1>
                                            <p className="iz">из5</p>
                                            <p className='under_text'>на основе 9 отзывов</p>
                                        </div>
                                    <div>
                                    </div>

                                    </div>
                                </div>
                                <button className="price_btn">Прочитать отзывы на агрегатор</button>
                            </li>
                        </ul>
                     </div>



                      <div className="standart">
                        <h1 className='standart_name'>ПРИДЕРЖИВАЕМСЯ ВЫСОКИХ СТАНДАРТОВ</h1>

                        <div className="standart_div">
                            <div className="standart1">
                                <p>Полная готовность всех элементов дома:от каркаса до мельчайших деталей, включая заводскую покраску и антисептирование</p>
                            </div>
                            <div className="standart2">
                                <p>Паспорт качества на каждый дом по завершении строительства</p>
                            </div>
                            <div className="standart3">
                                <p>Приемка этапов стройки авторским надзором IDEA WOOD HOUSE</p>
                            </div>
                                <div className="standart4">
                                <p>Собственное производство с европейскими стандартами</p>
                            </div>
                            <div className="standart5">
                                <p>Контроль качества дома с помощью аэродвери и тепловизора независимой сторонней огранизацией</p>
                            </div>
                            <div className="standart6">
                                <h3>Узнайте больше о наших стандартах</h3>
                                <p>Предоставим необходимые документы и материалы для изучения контроля качества.</p>
                                <button>Связаться с менеджером</button>
                                <button>Узнать больше   </button>
                            </div>
                        </div>
                     </div>


                     <div className="part">
                        <h1>ПАРТНЕРЫ IDEA WOOD HOUSE</h1>
                        <ul className="part_list">
                            <li className="part_li">
                                <img src={part1} alt="" className='lalal' />
                            </li>
                            <li className="part_li">
                                <img src={part2} alt=""  className='lalal'/>
                            </li>
                            <li className="part_li">
                                <img src={part3} alt="" />
                            </li>
                            <li className="part_li">
                                <img src={part4} alt=""  className='lalal'/>
                            </li>
                            <li className="part_li">
                                <img src={part5} alt="" className='lalal' />
                            </li>
                            <li className="part_li">
                                <img src={part6} alt="" />
                            </li>
                        </ul>
                     </div>



                     <div className="question">
                        <h1 className="price_name">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h1>

                        <div className="question_div">
                            <ul className="left_list">
                                <li className="left_li">Можно ли доверять вашим специалистом?</li>
                                <li className="left_li">Сколько времени занимаетреализация проекта?</li>
                                <li className="left_li">Кто производит закупку материалов?</li>
                                <li className="left_li">Как рассчитать стоимость проекта/услуги?</li>
                                <li className="left_li">Может ли увеличиться стоимостьуслуги или проекта в процессе работы?</li>
                            </ul>
                            <div className="right_div">
                               <div className="right_div1">
                                    <p className='question_text'>ОБЩИЕ ВОПРОСЫ</p>
                                    <h3>Можно ли доверять вашим специалистам?</h3>
                                    <p className="pipi">Все наши сотрудники постоянно развиваются в своей области и используют современные технологии и инструменты. К тому же, на большинство работ мы предоставляем гарантию сроком от 1 до 5 лет.</p>
                               </div>

                               <div className="right_div2">
                                    <p className="div2_text">Остались вопросы? Получите бесплатную консультацию для более развернутых ответов</p>
                                    <div className="tel_div">📞</div>
                               </div>

                            </div>
                        </div>
                     </div> 
                </div>
              </main>
    </div>
  )
}
