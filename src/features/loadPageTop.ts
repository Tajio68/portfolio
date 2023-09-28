import { useNavigate } from "react-router-dom";

export const LoadPageTop = (link: string) => {
    const navigate = useNavigate();
    navigate(link);
    window.scrollTo(0, 0);
}