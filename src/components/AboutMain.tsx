import { useNavigate } from "react-router-dom";
import { useInfoStore } from "../data/zustand/store";

const AboutMain: React.FunctionComponent = () => {

    const navigate = useNavigate();

    const { infos } = useInfoStore();

    const goPageTop = (link: string) => {
        navigate(link);
        window.scrollTo(0, 0);
    }

    return (
        <div id="aboutMain" className="selectionToWhite reveal">
            <h2 className="titleCenter">À propos</h2>
            <p>{infos.desc}</p>
            <button className="whiteButton" onClick={() => goPageTop('/about')}>En savoir plus</button>
        </div>
    );
}
 
export default AboutMain;