import Main from '../../components/main/Main'
import Information from '../../components/information/Information';
import Infor from '../../components/infor2/Infor';
import Menu_header from '../../components/menu_header/Menu_header';

function Header() {


    return (
       <>
            <Menu_header/>
            <Main />  
            <Information />
            <Infor />
       </>
    )
}


export default Header
