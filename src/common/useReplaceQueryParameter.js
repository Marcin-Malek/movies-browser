import { useLocation, useNavigate } from "react-router-dom";

export const useReplaceQueryParameter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    return ({ key, value }) => {
        value ?
            searchParams.set(key, value)
            :
            searchParams.delete(key);
        navigate(`${location.pathname}?${searchParams.toString()}`);
    };
};