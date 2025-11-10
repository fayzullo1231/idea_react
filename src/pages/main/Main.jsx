import './Main.css'
import rektangle from '../../assets/Rectangle.png'
import rektangle2 from '../../assets/Rectangle2.png'
import rektangle3 from '../../assets/Rectangle3.png'
import lgbt from '../../assets/lgbt.png'
import iskiz from '../../assets/mini_iskiz.png'
import divan from '../../assets/kreslo.png'
import uslug from '../../assets/uslug.png'
import uslug1 from '../../assets/uslug1.png'
import uslug2 from '../../assets/uslug2.png'
import uslug3 from '../../assets/uslug3.png'



 function Main() {
  return (
    
 <main className='main_main'>
     <div className="container">
           <ul className="main_list">
            <li className="main_li">
                <div className="text_divl">
                    <div className='text1_div'>
                        <h3>CHALET IDEA 185 </h3>
                        <p>Двухэтажные фахверки</p>
                    </div>
                    <div className='text1_div la' >
                        <h3>185 м² · 6 комнат </h3>
                        <p>Клееный брус · 2 этажа · 2планировка</p>
                    </div>
                </div>
                <img src={rektangle} alt="" />
            </li>
             <li className="main_li">
                <div className="text_divl">
                    <div className='text1_div'>
                        <h3>CHALET IDEA 224 </h3>
                        <p>Двухэтажные фахверки</p>
                    </div>
                    <div className='text1_div la'>
                        <h3>224 м² · 5 комнат </h3>
                        <p>Клееный брус · 2 этажа · 2 планировка</p>
                    </div>
                </div>
                <img src={rektangle2} alt="" />
            </li>
            <li className="main_li">
                <div className="text_divl">
                    <div className='text1_div'>
                        <h3>CHALET IDEA 136 </h3>
                        <p>Двухэтажные фахверки</p>
                    </div>
                    <div className='text1_div la'>
                        <h3>136 м² · 4 комнат </h3>
                        <p>Клееный брус · 2 этажа · 2 планировка</p>
                    </div>
                </div>
                <img src={rektangle3} alt="" />
            </li>
            <li className="main_li">
                <div className="text_divl">
                    <div className='text1_div'>
                        <h3>CHALET IDEA 136 </h3>
                        <p>Двухэтажные фахверки</p>
                    </div>
                    <div className='text1_div la'>
                        <h3>136 м² · 4 комнат </h3>
                        <p>Клееный брус · 2 этажа · 2 планировка</p>
                    </div>
                </div>
                <img src={rektangle3} alt="" />
            </li>
           </ul>


      </div>

      <div className="bg_section">
        <div className="container">
            <div className="lol_div">
                <div className="lol_left">
                    <p>ИСПОЛЬЗУЕМ VR-ТЕХНОЛОГИИ ПРИ РАБОТЕ С ПРОЕКТАМИ</p>
                    <h2>МЕНЯЙТЕ ПЛАНИПРОВКУ ОНЛАЙН</h2>
                </div>
                <div className="lol_right">
                    <button>Забронировать VR-сеанс</button>
                </div>
            </div>
        </div>
      </div>

       <div className="black_div">
        <div className="container">
            <div className="blck_div">
                <div className="texts_div">
                    <h1>Технология мечты</h1>
                    <p>Создавайте идеальное пространство с VR. Наслаждайтесь реалистичной 3D-визуализацией, экспериментируя спланировкой, цветами и мебелью.
Просто,удобно, впечатляюще!</p>
                </div>
                <div className="lala">
                    <div className=" lgbt">
                    <img  src={lgbt} alt="lgbt" />
                    <h1>Измените цвет стен</h1>
                </div>
                <div className="flex_div">
                        <img src={divan} alt="" />
                        <h1>Выберите мебель</h1>
                </div>
                <div className="iskiz_div">
                    <h1>Меняйте планировку и смотрите, как ваш дом меняется в лучшую сторону</h1>
                    <img src={iskiz} alt="" />
                </div>
                </div>
            </div>
        </div>
      </div> 


      <div className="uslugi">
        <div className="container">
            <h1 className="uslug_name">НАШИ УСЛУГИ</h1>
            <p className="uslug_text">МЫ ЗАНИМАЕМСЯ СТРОИТЕЛЬСТВО ЗАГОРОДНЫХ ДОМОВ ДОМА ПО ТЕХНОЛОГИИ ФАХВЕРК </p>
            <ul className="uslug_list">
                <li className="uslug_li">
                    <img src={uslug} alt="" />
                    <h3>Собственный проектный отдел</h3>
                </li>
                <li className="uslug_li">
                    <img src={uslug1} alt="" />
                    <h3>Полный цикл производства и строительства</h3>
                </li>
                <li className="uslug_li">
                    <img src={uslug2} alt="" />
                    <h3>Дом за 60 дней без ущерба качеству</h3>
                </li>
                <li className="uslug_li">
                    <img src={uslug3} alt="" />
                    <h3>Авторский надзор каждого дома</h3>
                </li>    
            </ul>

            <ul className="uslug_list2">
                <li className='uslug_li2'>
                    <h2>Обсуждение проекта</h2>
                    <p>Предоставляем бесплатныйпроект и смету всего за день.</p>
                </li>
                <li className='uslug_li2'>
                    <h2>Адаптация дома подваш стиль жизни</h2>
                    <p>Проектируем пространства вгармонии  вашим участком.</p>
                </li>
                <li className='uslug_li2'>
                    <h2>Сопровождение ипотечных сделок</h2>
                    <p>Бесплатно сопровождаемипотечные сделки клиентов.</p>
                </li>
                <li className='uslug_li2'>
                    <h2>Качество</h2>
                    <p>Следим за качеством нашихпроектов и их реализацией.</p>
                </li>
            </ul>
        </div>
      </div>
      
</main>
)}

export default Main
