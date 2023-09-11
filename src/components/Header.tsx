import { useNavigate } from "react-router-dom";
import darkModeImg from "./../assets/img/darkMode.png" ;

interface HeaderProps {

}

const Header: React.FunctionComponent<HeaderProps> = () => {

    const navigate = useNavigate();

    const darkModeTrigger = () => {

    } // A faire à la fin du Front End

    return (
        <div id="header">
            <div id="links">
                <a onClick={() => navigate('/')}>Accueil</a>
                <a onClick={() => navigate('/portfolio')}>Portfolio</a>
                <a onClick={() => navigate('about')}>À propos</a>
            </div>
            <div id="darkModeDiv">
                <img src={darkModeImg} onClick={() => darkModeTrigger()}></img>
            </div>
        </div>
    );
}

export default Header;