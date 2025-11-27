import proekt1 from '../../assets/proekt_img1.png'
import proekt2 from '../../assets/proekt_img2.png'
import proekt3 from '../../assets/proekt_img3.png'
import proekt4 from '../../assets/proekt_img4.png'
import proekt5 from '../../assets/proekt_img5.png'
import proekt6 from '../../assets/proekt_img6.png'
import proekt7 from '../../assets/proekt_img7.png'
import proekt8 from '../../assets/proekt_img8.png'
import './proekt_main.css'

function Proekt_main() {
  return (
    <div>
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

export default Proekt_main
