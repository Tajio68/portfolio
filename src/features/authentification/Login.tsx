import { useState } from "react";
import { handleInputs } from "../handleInputs";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login: React.FunctionComponent = () => {

    const auth = getAuth();
    const navigate = useNavigate();

    const [infos, setInfos] = useState({
        mail: "",
        password: "",
        uncorrect: false
    })

    const signIn = () => {
        signInWithEmailAndPassword(auth, infos.mail, infos.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setInfos({
                    mail: "",
                    password: "",
                    uncorrect: false
                });
                navigate('/manager')
            })
            .catch(() => {
                setInfos({
                    mail: "",
                    password: "",
                    uncorrect: true
                });
            });
    }

    return (
        <div id="auth">
            <input placeholder="Mail" name="mail" onChange={(e) => handleInputs(e, setInfos, infos)} />
            <input placeholder="Password" type="password" name="password" onChange={(e) => handleInputs(e, setInfos, infos)} />
            <button className="blueButton" onClick={() => signIn()}>Connection</button>
            {<p>Identifiants incorrect</p> && infos.uncorrect}
        </div>
    );
}

export default Login;