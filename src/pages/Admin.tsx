import { useNavigate } from "react-router-dom";

const Admin: React.FunctionComponent = () => {

    const navigate = useNavigate();
    window.scrollTo(0, 0);

    return (  
        <div id="admin">
            <button className="blueButton" onClick={() => navigate("/manager/infos")}>Informations</button>
            <button className="blueButton" onClick={() => navigate("/manager/messages")}>Voir les messages</button>
        </div>
    );
}
 
export default Admin;