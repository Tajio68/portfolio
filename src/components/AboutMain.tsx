import { useNavigate } from "react-router-dom";

interface AboutMainProps {
    
}
 
const AboutMain: React.FunctionComponent<AboutMainProps> = () => {

    const navigate = useNavigate();

    return (
        <div id="aboutMain" className="selectionToWhite reveal">
            <h2 className="titleCenter">À propos</h2>
            <p>Desc Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea minus tenetur sunt quod quam sed, numquam delectus quaerat! Cum error dolor nostrum aut sequi tenetur quo hic voluptates ea earum.</p>
            <button className="whiteButton" onClick={() => navigate('/about')}>En savoir plus</button>
        </div>
    );
}
 
export default AboutMain;