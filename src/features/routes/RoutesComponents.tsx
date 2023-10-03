import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../../pages/Main";
import Portfolio from "../../pages/Portfolio";
import About from "../../pages/About";
import Admin from "../../pages/Admin";
import App from "../../App";
import Authenticate from "../authentification/Authenticate";
import Infos from "../../components/admin/Infos";
import Messages from "../../components/admin/Messages";
import Login from "../authentification/Login";

const RoutesComponents: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path='/*' element={<Main />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/about' element={<About />} />
                    <Route path="/login" element={<Login />}/>
                    <Route path="/manager" element={<Authenticate><Admin /></Authenticate>} />
                    <Route path="/manager/infos" element={<Authenticate><Infos /></Authenticate>} />
                    <Route path="/manager/messages" element={<Authenticate><Messages /></Authenticate>} />
                </Routes>
            </App>
        </BrowserRouter>
    );
}

export default RoutesComponents;