interface RealisationSliderProps {
    realisations: Realisation[];
}
 
const RealisationSlider: React.FunctionComponent<RealisationSliderProps> = ({ realisations }) => {

    

    return (
        <div id="realisationSlider reveal">
            {realisations.length === 0 ? <><p>Pas de projets pour l'instant, proposez moi-en !</p></> : <p>Projets</p>}
        </div>
    );
}
 
export default RealisationSlider;