import { useContext } from "react";
import { AuthContext } from "../Components/context/AuthProvider";

const useAuth = () => {
    return (
        useContext (AuthContext)
    );
};

export default useAuth;