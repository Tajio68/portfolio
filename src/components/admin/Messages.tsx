import { useEffect } from "react";
import { useMsgStore } from "../../data/zustand/store";
import BackButton from "./BackButton";

 

const Messages: React.FunctionComponent = () => {

    const { messages, removeMessage } = useMsgStore();

    useEffect(() => {
      sessionStorage.setItem("messages", JSON.stringify(messages));

    }, [messages]);

    return (  
        <div id="messages">
            {
                messages.length === 0 ? <h2>Pas de messages !</h2> :
                messages.map((msg) => {
                    return(
                        <div key={msg.id} className={msg.id}>
                            <h2>{msg.title}</h2>
                            <h3>{msg.name + ' ' + msg.surname}</h3>
                            <h3>{msg.text}</h3>
                            <h3>{msg.mail}</h3>
                            <h3>{msg.phoneNumber}</h3>
                            <button className="blueButton" onClick={() => removeMessage(msg.id)}>Supprimer</button>
                            <hr />
                        </div>
                    )
                })
            }
            <BackButton />
        </div>
    );
}
 
export default Messages;