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