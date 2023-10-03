import { useState } from "react";
import RealisationCard from "./RealisationCard";

interface RealisationSliderProps {
    realisations: Realisation[];
}

const RealisationSlider: React.FunctionComponent<RealisationSliderProps> = ({ realisations }) => {

    const [index, setIndex] = useState(0);

    const buttonClick = (button: number) => {
        const element = document.getElementById('slideCard');
        button === 0 ? element?.classList.add('slideToLeft') : element?.classList.add('slideToRight');
        setTimeout(() => {
            button === 0 ? index - 1 < 0 ? setIndex(realisations.length - 1) : setIndex(index - 1) : index + 1 > realisations.length - 1 ? setIndex(0) : setIndex(index + 1);
        }, 450);
        setTimeout(() => {
            button === 0 ? element?.classList.remove('slideToLeft') : element?.classList.remove('slideToRight');
        }, 1000);
        
    }

    const noDisplay = <><p className="titleCenter">Pas de projets pour l'instant, proposez moi-en !</p></>;

    const display =
        <>
            <button type="button" className="sliderButton leftButton" onClick={() => buttonClick(0)}><p>&#10132;</p></button>
            <div id="slideCard" className=" ">
                {<RealisationCard realisation={realisations[index]}></RealisationCard>}
            </div>
            <button type="button" className="sliderButton rightButton" onClick={() => buttonClick(1)}><p>&#10132;</p></button>
        </>

    return (
        <div id="realisationSlider">
            {realisations.length === 0 ? noDisplay : display}
        </div>
    );
}

export default RealisationSlider;