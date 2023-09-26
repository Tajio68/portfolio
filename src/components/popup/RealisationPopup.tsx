interface RealisationProps {
    realisation?: Realisation;
};

const RealisationPopup: React.FunctionComponent<RealisationProps> = ({ realisation }) => {
    if (realisation) {
        return (
            <div className="realisationPopup">
                <h2 className="titleCenter">{realisation.title}</h2>
                <div>
                    <p>{realisation.desc}</p>
                    <img src={realisation.img} />
                </div>
                <h3>Mis à jour le {realisation.date}</h3>
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