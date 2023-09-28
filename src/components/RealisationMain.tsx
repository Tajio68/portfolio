import { useNavigate } from "react-router-dom";
import RealisationSlider from "./RealisationSlider";
import { useRealStore } from "../data/zustand/store";
 
const RealisationMain: React.FunctionComponent = () => {

    const { selectedReals } = useRealStore();
    const navigate = useNavigate();

    return (  
        <div id="realisationMain" className="selectionToBlue reveal">
            <h2 id="realisationMainTitle" className="titleCenter">Mes réalisations</h2>
            <RealisationSlider realisations={selectedReals}/>
            <button className="blueButton" onClick={() => navigate('/portfolio')}>Plus de projets</button>
        </div>
    );
}
 
export default RealisationMain;