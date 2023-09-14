import { useState } from "react";

interface RealisationCardProps {
    realisation: Realisation;
};
 
const RealisationCard: React.FunctionComponent<RealisationCardProps> = ({ realisation }) => {

    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        console.log('hover')
        setHovered(true);
    }

    const handleUnhover = () => {
        console.log('unhover')
        setHovered(false);
    }

    const hoverTrigger:string = hovered ? 'showCardDiscover' : '';
    const unhoverTrigger:string = hovered ? '' : 'hideCardDiscover';

    return (
        <div className="realisationCard reveal" onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
            <div className="cardTitle">
                <h2>{realisation.title}</h2>
            </div>
            <div className="cardImage">
                <img src={realisation.img} />
            </div>
            <div className={'cardDiscover' + ' ' + hoverTrigger + ' ' + unhoverTrigger}>
                <h2>Découvrir</h2>
            </div>
        </div>
    );
}
 
export default RealisationCard;