import './nformation.css'
import img from '../../assets/information_img.png'


 function Information() {
  return (
    <div className='container'>
       <div className="Information">
                <h1 className="information_name">Энергоэффективные PIR-панели для вашего дома</h1>
            
            <div className="bottom_div">
                <div className="text_div">
                    <p className='ass'>Мы перезвоним для уточнения деталей и ваших указаний кпредстоящему обсуждению.</p>
                    <div className="chekbox_div">
                        <input type="checkbox" name="" id="" className='check' />
                        <p>Я согласен (а) на обработку персональных данных</p>
                    </div>
                </div>

                <div className="form_div">
                    <div className='under_div'>
                        <p>Ваше имя*</p>
                        <form>
                            <input type="text" placeholder='Ваше имя'/>    
                        </form>    
                    </div>    

                    <div className='under_div'>
                        <p>Телефон*</p>
                        <form>
                            <input type="number" placeholder='+998 77 777-77-77'/>    
                        </form>    
                    </div>   
                    <button className="form_btn">Отправить завку</button> 
                </div>    
            </div>
            <img src={img} alt="" className='img'/>

       </div>
    </div>
  )
}


export default Information
