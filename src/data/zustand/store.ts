import { create } from "zustand";

// REALISATIONS

interface RealisationState {
    reals: Realisation[];
    selectedReals: Realisation[];
}

export const useRealStore = create<RealisationState>((set) => ({
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
            title: '54654'}, 
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
    infos: Infos;
    updateInfo: (data: Infos) => void;
}

export const useInfoStore = create<InfosState>((set) => ({
    infos: {
        desc: "Ceci est un texte test",
        mail: "timeo.godin@gmail.com",
        phoneNumber: "+33650255325"
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
    addMessage: (message: Message) => void;
    removeMessage: (id: string) => void;
}

export const useMsgStore = create<MessageState>((set) => ({
    messages: [
        {
            title: 'Test', 
            text: "TEST TEXTE", 
            name: 'GODIN', 
            surname: 'Timéo', 
            mail: 'tgodin@gmail.com',
            phoneNumber: "0641616",
            id: "zdazd"
        }
    ],

    addMessage: (message) => {
        set((state) => ({
            messages: [
                ...state.messages,
                message as Message
            ]
        }));
    },

    removeMessage: (id) => {
        set((state) => ({
            messages: state.messages.filter((msg) => msg.id !== id)
        }));
    }
}));