declare module "*.jpg" {
    const path: string;
    export default path;
};
declare module "*.png" {
    const path: string;
    export default path;
};

declare type Realisation = {
    desc: string;
    img: string;
    date: string;
    link: string;
    id: string;
    title: string;
};

declare type Infos = {
    desc: string;
    mail: string;
    phoneNumber: string;
}

declare type Message = {
    title: string;
    text: string;
    name: string;
    surname: string;
    mail: string;
    phoneNumber?: string;
    id: string;
}

declare type popupContextType = {
    show: (infoChoice: number, real?: Realisation) => void;
}

declare type SkillType = {
    img: string;
    name: string;
}