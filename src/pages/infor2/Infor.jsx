import './infor.css'

 function Infor() {
  return (
        <div className='container'>
           <div className="Infor">
                    <h1 className="infor_name">ПРЕВРАТИТЕ ВАШУИНДИВИДУАЛЬНОСТЬ В ДОМ</h1>
                
                <div className="bottom_div">
                    <div className="textt_div">
                        <p className='asss'>Мы перезвоним для уточнения деталей и ваших указаний кпредстоящему обсуждению.</p>
                        <div className="vvv">
                            <input type="checkbox" name="" id="" className='checkk' />
                            <p className='aa'>Я согласен (а) на обработку персональных данных</p>
                        </div>
                    </div>
    
                    <div className="form_divv">
                        <div className='underr_div'>
                            <p>Ваше имя*</p>
                            <form>
                                <input type="text" placeholder='Ваше имя'/>    
                            </form>    
                        </div>    
    
                        <div className='underr_div'>
                            <p>Телефон*</p>
                            <form>
                                <input type="number" placeholder='+998 77 777-77-77'/>    
                            </form>    
                        </div>   
                         <div className='underr_div'>
                            <p>Стройплощадка*</p>
                            <form>
                                <input type="string" placeholder='Modern Stroy'/>    
                            </form>    
                        </div>   
                        <button className="form_btn">Отправить завку</button> 
                    </div>    
                </div>
    
           </div>
        </div>
      )
    }
    
    
    

export default Infor
