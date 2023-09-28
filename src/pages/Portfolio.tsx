import { useEffect } from "react";
import RealisationList from "../components/RealisationList";
import { observer } from "../features/IntersectionObserver/intersectionObserver";
import { useRealStore } from "../data/zustand/store";

interface PortfolioProps {
    
}
 
const Portfolio: React.FunctionComponent<PortfolioProps> = () => {

    const {reals} = useRealStore();

    useEffect(() => {
      document.querySelectorAll('.reveal').forEach((r) => {
        observer.observe(r);
      });
    }, []);

    window.scrollTo(0, 0);

    return (
        <div id="portfolio">
            <h1>Mes réalisations</h1>
            <RealisationList reals={reals}/>
        </div>
    );
}
 
export default Portfolio;