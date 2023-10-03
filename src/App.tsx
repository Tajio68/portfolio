import Header from './components/Header';
import { ReactNode, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Popup from './components/popup/Popup';
import { PopupContextProvider } from './context/PopupContext';
import GoToTop from './components/GoToTop';
import { fetchInfos, fetchMessages } from './data/firebase/handleData';
import { useInfoStore, useMsgStore } from './data/zustand/store';

interface AppProps {
  children: ReactNode
}

const App: React.FunctionComponent<AppProps> = ({ children }) => {

  const [infoPopup, setinfoPopup] = useState(0);
  const [triggerPopup, setTriggerPopup] = useState(false);
  const [real, setReal] = useState<Realisation>();

  const unshowPopup = () => {
    const element = document.getElementById("popupBody");
    element?.classList.remove("popupOpened");
    setTimeout(() => {
      setTriggerPopup(false);
    }, 300);
  }

  const { updateInfo } = useInfoStore();
  const { updateMessages } = useMsgStore();

  const fetchAllData = async () => {
    let dataInfos = await fetchInfos();
    let dataMsg = await fetchMessages();
    updateInfo(dataInfos);
    updateMessages(dataMsg);
    sessionStorage.setItem("infos", JSON.stringify(dataInfos));
    sessionStorage.setItem("messages", JSON.stringify(dataMsg));
  }

  useEffect(() => {
    if(!sessionStorage.getItem("infos") && !sessionStorage.getItem("messages")) {
      fetchAllData()
    }

  }, [])
  

  return (
    <div id='app'>
      <PopupContextProvider setData={setinfoPopup} setShow={setTriggerPopup} setReal={setReal}>
        {triggerPopup && <Popup info={infoPopup} unshow={unshowPopup} realisation={real}/>}
        <GoToTop />
        <Header />
        <div id='children'>
          {children}
        </div>
        <Footer />
      </PopupContextProvider>
    </div>
  );
}

export default App;
