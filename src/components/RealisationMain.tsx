import { useNavigate } from "react-router-dom";
import RealisationSlider from "./RealisationSlider";

interface RealisationMainProps {
    
}
 
const RealisationMain: React.FunctionComponent<RealisationMainProps> = () => {

    const navigate = useNavigate();

    return (  
        <div id="realisationMain" className="selectionToBlue reveal">
            <h2 id="realisationMainTitle" className="titleCenter">Mes réalisations</h2>
            <RealisationSlider realisations={[
                {
                    title: "TEST",
                    id: "zeaze5a46",
                    desc: "C'est un test no4",
                    img: "img",
                    date:" 00/00/23",
                    link: "azeazeaze"
                },
                {
                    title: "TEST 2",
                    id: "zeaze5qsdqsa46",
                    desc: "C'est un test",
                    img: "img",
                    date:" 00/00/23",
                    link: "azeazeaze"
                },
                {
                    title: "TEST 3",
                    id: "zeazezdazfa5a46",
                    desc: "C'est un test no3",
                    img: "img",
                    date:" 00/00/23",
                    link: "azeazeaze"
                },
            ]}/>
            <button className="blueButton" onClick={() => navigate('/portfolio')}>Plus de projets</button>
        </div>
    );
}
 
export default RealisationMain;