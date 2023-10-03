interface RealisationProps {
    realisation?: Realisation;
};

const RealisationPopup: React.FunctionComponent<RealisationProps> = ({ realisation }) => {
    if (realisation) {
        return (
            <div className="realisationPopup">
                <h2 className="titleCenter">{realisation.title}</h2>
                <p>{realisation.desc}</p>
                <img src={realisation.img} />
                <h3>Dernière mise à jour : {realisation.date}</h3>
                <a href={realisation.link}>Voir le site</a>
            </div>
        );
    }
    else {
        return(
            <div>

            </div>
        );
    }
}

export default RealisationPopup;