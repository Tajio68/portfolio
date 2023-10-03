import { useNavigate } from "react-router-dom";

const AboutMain: React.FunctionComponent = () => {

    const navigate = useNavigate();

    const goPageTop = (link: string) => {
        navigate(link);
        window.scrollTo(0, 0);
    }

    return (
        <div id="aboutMain" className="selectionToWhite reveal">
            <h2 className="titleCenter">À propos</h2>
            <p>Desc Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea minus tenetur sunt quod quam sed, numquam delectus quaerat! Cum error dolor nostrum aut sequi tenetur quo hic voluptates ea earum.</p>
            <button className="whiteButton" onClick={() => goPageTop('/about')}>En savoir plus</button>
        </div>
    );
}
 
export default AboutMain;