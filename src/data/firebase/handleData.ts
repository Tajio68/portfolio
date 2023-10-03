import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import {v4 as uuidv4} from 'uuid';

export const fetchInfos = async () => {
    const querySnapshot = await getDoc(doc(db, "infos", "ILBmDAULozwUfnCfO3Gz"));

    let dataInfos: Infos = {
        desc: "",
        mail: "",
        phoneNumber: ""
    }

    const data = querySnapshot.data();

    if (data) {
        dataInfos = {
            desc: data.desc || "",
            mail: data.mail || "",
            phoneNumber: data.phoneNumber || ""
        }
    }

    return(dataInfos);
}

export const fetchMessages = async () => {
    const querySnapshot = await getDocs(collection(db, "messages"));

    let dataMessages: Message[] = [];

    querySnapshot.forEach((doc) => {
        dataMessages.push({
            title: doc.data().title,
            text: doc.data().text,
            name: doc.data().name,
            surname: doc.data().surname,
            mail: doc.data().mail,
            phoneNumber: doc.data().phoneNumber,
            id: doc.id
        })
    });

    return(dataMessages);
}

export const writeInfos = async (data: Infos) => {
    await updateDoc(doc(db, "infos", "ILBmDAULozwUfnCfO3Gz"), {
        desc: data.desc,
        mail: data.mail,
        phoneNumber: data.phoneNumber
    });
}

export const createMessage = async (msg: Message) => {
    let idMsg = uuidv4();
    await setDoc(doc(db, "messages", idMsg), {
        mail: msg.mail,
        name: msg.name,
        phoneNumber: msg.phoneNumber,
        surname: msg.surname,
        text: msg.text,
        title: msg.title,
        id: msg.id
    });
}

export const deleteMessage = async (id: string) => {
    await deleteDoc(doc(db, "messages", id));
    
}

export const saveMessage = (data: Message[]) => {
    sessionStorage.setItem("messages" , JSON.stringify(data));
}
