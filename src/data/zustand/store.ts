import { create } from "zustand";

// REALISATIONS

interface RealisationState {
    reals: Realisation[];
    addReal: (desc: string, img: string, date: string, link: string, id: string, title: string) => void;
    updateReal: (desc: string, img: string, date: string, link: string, id: string, title: string) => void;
    removeReal: (id: string) => void;
}

const updatedReal = {
    desc: "",
    img: "",
    date: "",
    link: "",
    title: ""
}

export const useRealStore = create<RealisationState>((set) => ({
    reals: [],

    addReal: (desc: string, img: string, date: string, link: string, id: string, title: string) => {
        set((state) => ({
            reals: [
                ...state.reals,
                {
                    desc: desc,
                    img: img,
                    date: date,
                    link: link,
                    id: id,
                    title: title
                }
            ]
        }));
    },

    updateReal: (desc, img, date, link, id, title) => {
        set((state) => ({
            reals: state.reals.map((real) =>
                real.id === id ? {
                    ...real, updatedReal
                } : real
            ),
        }));
    },

    removeReal: (id) => {
        set((state) => ({
            reals: state.reals.filter((real) => real.id !== id)
        }));
    }
}));

// INFOS

type InfosState = {
    infos: Infos;
    updateInfo: (data: Infos) => void;
}

export const useInfoStore = create<InfosState>((set) => ({
    infos: {
        desc: "",
        mail: "",
        phoneNumber: ""
    },

    updateInfo: (data) => {
        set(() => ({
            infos: {
                desc: data.desc,
                mail: data.mail,
                phoneNumber: data.phoneNumber
            } as Infos
        }));
    }
}));

// MESSAGES

type MessageState = {
    messages: Message[];
    addMessage: (title: string, text: string, name: string, surname: string, mail: string, id: string, phoneNumber?: string) => void;
    removeMessage: (id: string) => void;
}

export const useMsgStore = create<MessageState>((set) => ({
    messages: [],

    addMessage: (title, text, name, surname, mail, id, phoneNumber) => {
        set((state) => ({
            messages: [
                ...state.messages,
                {
                    title: title,
                    text: text,
                    name: name,
                    surname: surname,
                    mail: mail,
                    id: id,
                    phoneNumber: phoneNumber
                }
            ]
        }));
    },

    removeMessage: (id) => {
        set((state) => ({
            messages: state.messages.filter((msg) => msg.id !== id)
        }));
    }
}));