import { useNavigate } from "react-router-dom";
import RealisationSlider from "./RealisationSlider";
import { useRealStore } from "../data/zustand/store";
 
const RealisationMain: React.FunctionComponent = () => {

    const { selectedReals } = useRealStore();
    const navigate = useNavigate();
    
    const goPageTop = (link: string) => {
        navigate(link);
        window.scrollTo(0, 0);
    }

    return (  
        <div id="realisationMain" className="selectionToBlue reveal">
            <h2 id="realisationMainTitle" className="titleCenter">Mes réalisations</h2>
            <RealisationSlider realisations={selectedReals}/>
            <button className="blueButton" onClick={() => goPageTop('/portfolio')}>Plus de projets</button>
        </div>
    );
}
 
export default RealisationMain;