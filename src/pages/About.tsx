import { useEffect, useState } from "react";
import { observer } from "../features/IntersectionObserver/intersectionObserver";
import { handleInputs } from "../features/handleInputs";
import { usePopupContext } from "../context/PopupContext";

interface AboutProps {

}

const About: React.FunctionComponent<AboutProps> = () => {

    const [sendMsg, setSendMsg] = useState(false);
    const [placeholder, setPlaceholder] = useState("Adresse Mail");

    const showPopup = usePopupContext();

    useEffect(() => {
        document.querySelectorAll('.reveal').forEach((r) => {
            observer.observe(r);
        })
    }, []);

    const [msg, setMsg] = useState<Message>({
        title: '',
        text: '',
        name: '',
        surname: '',
        mail: '',
        phoneNumber: '',
        id: ''
    })

    const postMsg = (msg: Message) => {
        if (msg.mail.length === 0) {
            setPlaceholder("Veuillez indiquer votre addresse mail");
            document.getElementById("mailInput")?.classList.add("required");
            showPopup?.show(1);
        } else {
            document.getElementById("mailInput")?.classList.remove("required");
            setSendMsg(true);
            showPopup?.show(4);
        }
    }

    return (
        <div id="about">
            <div id="descriptionAbout" className="reveal">
                <h1>À propos</h1>
                <img src="" id="photoAbout" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, expedita odio blanditiis, maxime dignissimos cumque iusto, non quod magnam beatae officia perspiciatis tenetur? Repellendus enim consequatur error laudantium aliquid veritatis consequuntur quia iusto rerum dolorem culpa ab odio esse cumque molestiae nulla veniam consectetur maxime sed, necessitatibus, voluptates inventore magnam!</p>
            </div>
            <div id="contact" className="reveal">
                <h2 className="titleCenter">Pour me contacter</h2>
                <div id="nameContact">
                    <input placeholder="Nom" onChange={(e) => handleInputs(e, setMsg, msg)} name="name" />
                    <input placeholder="Prénom" onChange={(e) => handleInputs(e, setMsg, msg)} name="surname" />
                </div>
                <input placeholder="Objet" onChange={(e) => handleInputs(e, setMsg, msg)} name="title" />
                <textarea placeholder="Décrivez votre projet ici" onChange={(e) => handleInputs(e, setMsg, msg)} name="text" />
                <input placeholder={placeholder} onChange={(e) => handleInputs(e, setMsg, msg)} name="mail" id="mailInput" className=""/>
                <input placeholder="Numéro de téléphone" onChange={(e) => handleInputs(e, setMsg, msg)} name="phoneNumber" />
                <button className="blueButton" onClick={() => postMsg(msg)}>{sendMsg ? "Message envoyé" : "Envoyer"}</button>
            </div>
            <div id="infoContact">
                <h2>Infos de contact : </h2>
                <p>Adresse mail : timeo.godin@gmail.com</p>
                <p>Téléphone: +33650255325</p>
            </div>
        </div>
    );
}

export default About;