interface AdminProps {
    
}
 
const Admin: React.FunctionComponent<AdminProps> = () => {
    return (  
        <div id="admin">
            <button className="blueButton">Réalisations</button>
            <button className="blueButton">Informations</button>
            <button className="blueButton">Voir les messages</button>
        </div>
    );
}
 
export default Admin;