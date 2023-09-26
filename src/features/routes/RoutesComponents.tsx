import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../../pages/Main";
import Portfolio from "../../pages/Portfolio";
import About from "../../pages/About";
import Admin from "../../pages/Admin";
import App from "../../App";
import Authenticate from "../authentification/Authenticate";

interface RoutesComponentsProps {

}



const RoutesComponents: React.FunctionComponent<RoutesComponentsProps> = () => {

    return (
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path='/*' element={<Main />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/manager' element={<Authenticate><Admin /></Authenticate>} />
                </Routes>
            </App>
        </BrowserRouter>
    );
}

export default RoutesComponents;