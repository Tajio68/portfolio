interface RealisationProps {
    realisation: Realisation;
};
 
const Realisation: React.FunctionComponent<RealisationProps> = ({ realisation }) => {
    return (
        <div className="realisation">
            <h2>{realisation.title}</h2>
            <div>
                <p>{realisation.desc}</p>
                <img src={realisation.img}/>
            </div>
            <h3>{realisation.date}</h3>
            <a href={realisation.link}>Voir le site</a>
        </div>
    );
}
 
export default Realisation;