import { useEffect } from "react";
import RealisationList from "../components/RealisationList";
import imgIcon from "./../assets/img/cssIcon.png"
import { observer } from "../features/IntersectionObserver/intersectionObserver";

interface PortfolioProps {
    
}
 
const Portfolio: React.FunctionComponent<PortfolioProps> = () => {

    useEffect(() => {
      document.querySelectorAll('.reveal').forEach((r) => {
        observer.observe(r);
      });
      
    }, []);

    return (
        <div id="portfolio">
            <h1>Mes réalisations</h1>
            <RealisationList reals={[{desc:'zae', img: imgIcon, date: '11/09/2001', link: 'azeaz', id:'1654', title: '54654'}, {desc:'zae', img: imgIcon, date: '11/09/2001', link: 'azeaz', id:'1654', title: '54654'}, {desc:'zae', img: imgIcon, date: '11/09/2001', link: 'azeaz', id:'1654', title: '54654'}, {desc:'zae', img: imgIcon, date: '11/09/2001', link: 'azeaz', id:'1654', title: '54654'}]}/>
        </div>
    );
}
 
export default Portfolio;