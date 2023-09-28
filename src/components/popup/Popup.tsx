import ErrorMsg from "./ErrorMsg";
import Legals from "./Legals";
import RealisationPopup from "./RealisationPopup";
import SentMsg from "./SentMsg";

interface PopupProps {
    realisation?: Realisation;
    info: number;
    unshow: () => void;
}

const Popup: React.FunctionComponent<PopupProps> = ({ info, unshow, realisation }) => {

    let returnNode: React.ReactNode = <></>;
    switch (info) {
        case 1:
            returnNode = <ErrorMsg />;
            break;
        case 2:
            returnNode = <Legals />;
            break;
        case 3:
            returnNode = <RealisationPopup realisation={realisation}/>;
            break;
        case 4:
            returnNode = <SentMsg />;
            break;
    };

    setTimeout(() => {
        const element = document.getElementById("popupBody");
        element?.classList.add("popupOpened");
    }, 100);
    
    return (
        <div id="popupBackground" className="">
            <div id="popupBody" className="selectionToWhite popupClosed">
                <div id="popupContainer">
                    {returnNode}
                </div>
                <button id="closePopup" className="whiteButton" onClick={unshow}>Fermer</button>
            </div>
        </div>
    );
}

export default Popup;