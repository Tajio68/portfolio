interface AuthenticateProps {
    
}
 
const Authenticate: React.FunctionComponent<AuthenticateProps> = () => {
    return (
        <div id="auth">
            <input placeholder="Mail"/>
            <input placeholder="Password"/>
            <button className="blueButton">Connection</button>
        </div>
    );
}
 
export default Authenticate;