import { createContext, useContext } from "react";

interface ContextType {
    children: React.ReactNode;
    setData: React.Dispatch<React.SetStateAction<number>>;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setReal?: React.Dispatch<React.SetStateAction<Realisation | undefined>>;
}

const PopupContext = createContext<popupContextType | undefined>(undefined);

export const PopupContextProvider: React.FunctionComponent<ContextType> = ({ children, setData, setShow, setReal }) => {

    const showPopup = (infoChoice: number, real: Realisation | undefined) => {
        setData(infoChoice);
        setShow(true);
        if (setReal) {
            setReal(real);
        }
    }

    const contextValue: popupContextType = {
        show: showPopup,
    }

    return <PopupContext.Provider value={contextValue}>{children}</ PopupContext.Provider>
}

export const usePopupContext = () => {
    const context = useContext(PopupContext);
    return (context);
}