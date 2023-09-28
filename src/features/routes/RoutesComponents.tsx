import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../../pages/Main";
import Portfolio from "../../pages/Portfolio";
import About from "../../pages/About";
import Admin from "../../pages/Admin";
import App from "../../App";
import Authenticate from "../authentification/Authenticate";
import Infos from "../../components/admin/Infos";
import Messages from "../../components/admin/Messages";

const RoutesComponents: React.FunctionComponent = () => {

    const AuthentificationRoute: React.FunctionComponent = () => {
        return (
                <Routes>
                    
                    
                </Routes>

        );
    }

    return (
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path='/*' element={<Main />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/about' element={<About />} />
                    <Route path="/manager" element={<Admin />} />
                    <Route path="/manager/infos" element={<Infos />} />
                    <Route path="/manager/messages" element={<Messages />} />
                </Routes>
            </App>
        </BrowserRouter>
    );
}

export default RoutesComponents;