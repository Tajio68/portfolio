import { useNavigate } from "react-router-dom";

const BackButton: React.FunctionComponent = () => {

    const navigate = useNavigate();

    return (
        <button className="blueButton" onClick={() => navigate("/manager")}>Retour</button>
    );
}
 
export default BackButton;