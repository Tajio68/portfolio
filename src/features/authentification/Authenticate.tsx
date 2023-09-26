interface AuthenticateProps {
    
}
 
const Authenticate: React.FunctionComponent<AuthenticateProps> = () => {
    return (
        <div id="auth">
            <input placeholder="mail"/>
            <input placeholder="mdp"/>
            <button className="blueButton">Connection</button>
        </div>
    );
}
 
export default Authenticate;