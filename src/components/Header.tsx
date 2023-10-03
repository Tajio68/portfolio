import { useNavigate } from "react-router-dom";
import darkModeImg from "./../assets/img/darkMode.png" ;
import { useEffect } from "react";

const Header: React.FunctionComponent = () => {

    const navigate = useNavigate();

    useEffect(() => {
      const handleScroll = () => {
        let element = document.getElementById("header");
        if (element) {
            if (window.scrollY > 50) {
                element.classList.add('hiddenHeader');
                element.classList.remove('showHeader');
                element.classList.replace('showHeader', 'hiddenHeader');
                element = document.getElementById("goToTop");
                element?.classList.remove("hideTop");
                element?.classList.add('showToTop');
            } else if (window.scrollY === 0) {
                element.classList.add('showHeader');
                element.classList.remove('hiddenHeader');
                element = document.getElementById("goToTop");
                element?.classList.remove('showToTop');
                element?.classList.add('hideTop');
            }  
        }   
      }

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);

    const darkModeTrigger = () => {

    } // A faire à la fin du Front End

    return (
        <div id="header" className="selectionToBlue">
            <div id="links">
                <a onClick={() => navigate('/')}>Accueil</a>
                <a onClick={() => navigate('/portfolio')}>Portfolio</a>
                <a onClick={() => navigate('/about')}>À propos</a>
            </div>
            <div id="darkModeDiv">
                <img src={darkModeImg} onClick={() => darkModeTrigger()}></img>
            </div>
        </div>
    );
}

export default Header;