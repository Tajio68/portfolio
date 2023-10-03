import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Admin: React.FunctionComponent = () => {

    const auth = getAuth();
    const navigate = useNavigate();
    window.scrollTo(0, 0);

    return (  
        <div id="admin">
            <button className="blueButton" onClick={() => navigate("/manager/infos")}>Informations</button>
            <button className="blueButton" onClick={() => navigate("/manager/messages")}>Voir les messages</button>
            <button className="blueButton" onClick={() => signOut(auth)}>Se déconnecter</button>
        </div>
    );
}
 
export default Admin;