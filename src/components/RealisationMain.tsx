import { useNavigate } from "react-router-dom";
import RealisationSlider from "./RealisationSlider";

interface RealisationMainProps {
    
}
 
const RealisationMain: React.FunctionComponent<RealisationMainProps> = () => {

    const navigate = useNavigate();

    return (  
        <div id="realisationMain" className="selectionToBlue reveal">
            <h2 className="titleCenter">Mes réalisations</h2>
            <hr />
            <RealisationSlider realisations={[]}/>
            <hr />
            <button className="blueButton" onClick={() => navigate('/portfolio')}>Plus de projets</button>
        </div>
    );
}
 
export default RealisationMain;