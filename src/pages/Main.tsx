import { useEffect } from "react";
import AboutMain from "../components/AboutMain";
import Presentation from "../components/Presentation";
import RealisationMain from "../components/RealisationMain";
import Skills from "../components/Skills";
import { observer } from "../features/IntersectionObserver/intersectionObserver";
 
const Main: React.FunctionComponent = () => {

    useEffect(() => {
      document.querySelectorAll('.reveal').forEach((r) => {
        observer.observe(r);
      });
      
    }, []);

    window.scrollTo(0, 0);

    return (
        <div id="main">
            <Presentation />
            <RealisationMain />
            <AboutMain />
            <Skills />
        </div>
    );
}
 
export default Main;