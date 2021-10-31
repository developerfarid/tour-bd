import { useContext } from "react";
import { AllContext } from "../Context/AllContextProvider";


const useData = () => {
    return useContext(AllContext)
    
};

export default useData;