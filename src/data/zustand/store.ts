import { create } from "zustand";
import { createMessage, deleteMessage, writeInfos } from "../firebase/handleData";

// REALISATIONS

interface RealisationState {
    reals: Realisation[];
    selectedReals: Realisation[];
}

export const useRealStore = create<RealisationState>(() => ({
    reals: [
        {
            desc:'zae', 
            img: 'imgIcon', 
            date: '11/09/2001', 
            link: 'azeaz', 
            id:'1654', 
            title: '54654'
        }, 
        {
            desc:'zae', 
            img: 'imgIcon', 
            date: '11/09/2001', 
            link: 'azeaz', 
            id:'1654', 
            title: '54654'
        }, 
        {
            desc:'zae', 
            img: 'imgIcon', 
            date: '11/09/2001', 
            link: 'azeaz', 
            id:'1654', 
            title: '54654'
        }, 
        {
            desc:'zae',
            img: 'imgIcon', 
            date: '11/09/2001', 
            link: 'azeaz', 
            id:'1654', 
            title: '54654'
        }
    ],

    selectedReals: [
        {
            desc:'zae',
            img: 'imgIcon', 
            date: '11/09/2001', 
            link: 'azeaz', 
            id:'1654', 
            title: 'no1'
        },
        {
            desc:'zae',
            img: 'imgIcon', 
            date: '11/09/2001', 
            link: 'azeaz', 
            id:'1654', 
            title: 'no2'
        },
        {
            desc:'zae',
            img: 'imgIcon', 
            date: '11/09/2001', 
            link: 'azeaz', 
            id:'1654', 
            title: 'no3'
        },
        {
            desc:'zae',
            img: 'imgIcon', 
            date: '11/09/2001', 
            link: 'azeaz', 
            id:'1654', 
            title: 'no4'
        }
    ],

}));

// INFOS

type InfosState = {
    infos: Infos ;
    updateInfo: (data: Infos) => void;
}

const sessionInfos: Infos = JSON.parse(sessionStorage.getItem("infos") || "{}");

export const useInfoStore = create<InfosState>((set) => ({
    infos: {
        desc: sessionInfos.desc || "",
        mail: sessionInfos.mail || "",
        phoneNumber: sessionInfos.phoneNumber || ""
    },

    updateInfo: (data) => {
        if ('desc' in data && 'mail' in data && 'phoneNumber' in data) {
            set(() => ({
                infos: {
                    desc: data.desc,
                    mail: data.mail,
                    phoneNumber: data.phoneNumber
                } as Infos
            }));
        }
        
        sessionStorage.setItem("infos", JSON.stringify(data));
        writeInfos(data)
    }
}));

// MESSAGES

type MessageState = {
    messages: Message[];
    updateMessages: (data: Message[]) => void;
    addMessage: (message: Message) => void;
    removeMessage: (id: string) => void;
}

const sessionMessages: Message[] = JSON.parse(sessionStorage.getItem("messages") || "[]");

export const useMsgStore = create<MessageState>((set) => ({
    messages: sessionMessages || [],

    updateMessages: (data) => {
        set(() => ({
            messages: data
        }));
        sessionStorage.setItem("messages", JSON.stringify(data));
    },

    addMessage: (message) => {
        set((state) => ({
            messages: [
                ...state.messages,
                message as Message
            ],
        }));
        createMessage(message);
    },

    removeMessage: (id) => {
        set((state) => ({
            messages: state.messages.filter((msg) => msg.id !== id)
        }));
        deleteMessage(id);
    }
}));