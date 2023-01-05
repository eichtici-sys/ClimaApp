import { useContext } from "react";
import ClimaContext from "../context/ClimaProvide";

const useClima= ()=>{
    return useContext(ClimaContext)
}

export default useClima