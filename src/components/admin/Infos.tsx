import { useState } from "react";
import { useInfoStore } from "../../data/zustand/store";
import { handleInputs } from "../../features/handleInputs";
import BackButton from "./BackButton";

const Infos: React.FunctionComponent = () => {

    const {infos, updateInfo} = useInfoStore();
    const [modif, setModif] = useState<Infos>({
        desc: infos.desc,
        mail: infos.mail,
        phoneNumber: infos.phoneNumber
    })

    return (
        <div id="infos">
            <textarea name="desc" value={modif.desc} onChange={(e) => handleInputs(e, setModif, modif)}/>
            <input name="mail" value={modif.mail} onChange={(e) => handleInputs(e, setModif, modif)}/>
            <input name="phoneNumber" value={modif.phoneNumber} onChange={(e) => handleInputs(e, setModif, modif)}/>
            <button className="blueButton" onClick={() => updateInfo(modif)}>Confirmer les changements</button>
            <BackButton />
        </div>
    );
}
 
export default Infos;