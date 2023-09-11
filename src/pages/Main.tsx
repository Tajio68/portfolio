interface MainProps {
    
}
 
const Main: React.FunctionComponent<MainProps> = () => {
    return (
        <div id="main">
            <h1>TEST</h1>
            <h2>Sous Titre</h2>
            <p>Test paragraph</p>
            <a>Lien</a>
            <div className="divTest"></div>
            <div className="divTest"></div>
            <div className="divTest"></div>
            <div className="divTest"></div>
        </div>
    );
}
 
export default Main;