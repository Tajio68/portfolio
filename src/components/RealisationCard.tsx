import { useState } from "react";
import { usePopupContext } from "../context/PopupContext";

interface RealisationCardProps {
    realisation: Realisation;
};
 
const RealisationCard: React.FunctionComponent<RealisationCardProps> = ({ realisation }) => {

    const [hovered, setHovered] = useState(false);
    const showPopup = usePopupContext();

    const hoverTrigger:string = hovered ? 'showCardDiscover' : 'hideCardDiscover';

    return (
        <div className="realisationCard reveal" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => showPopup?.show(3, realisation)}>
            <div className="cardTitle">
                <h2>{realisation.title}</h2>
            </div>
            <div className="cardImage">
                <img src={realisation.img} />
            </div>
            <div className={'cardDiscover' + ' ' + hoverTrigger}>
                <h2>Découvrir</h2>
            </div>
        </div>
    );
}
 
export default RealisationCard;