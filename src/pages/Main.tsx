import { useEffect } from "react";
import AboutMain from "../components/AboutMain";
import Presentation from "../components/Presentation";
import RealisationMain from "../components/RealisationMain";
import Skills from "../components/Skills";

interface MainProps {
    
}
 
const Main: React.FunctionComponent<MainProps> = () => {

    const threshold = 0;
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: threshold
    }

    const handleIntersect: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > threshold) {
                entry.target.classList.add('reveal-visible');
            }
        })
    }

    useEffect(() => {
      const observer = new IntersectionObserver(handleIntersect, options);
        
      document.querySelectorAll('.reveal').forEach((r) => {
        observer.observe(r);
      });
      
    }, [])
    

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