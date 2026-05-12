import {useState} from "react";
import HolaMundo3 from "./HolaMundo3.tsx";

function Contador () {

    const [contador, setContador] = useState(0)

    const handleUp = () => {
        setContador(contador + 1)
    }

    const handleDown = () => {
        setContador(contador - 1)
    }

    const handleMult = () => {
        setContador(contador * 2 )
    }

    const handleInit = () => {
        setContador(0)
    }
    return (

        <>
            <div> Valor {contador}  </div>
            <br/>
            <button onClick={handleUp}> + </button>
            |
            <button onClick={handleDown}> - </button>
            |
            <button onClick={handleMult}> *  </button>
            |
            <button onClick={handleInit}> 0 </button>
            <br/>
            <HolaMundo3 name={"Maris"} edad={contador}/>

        </>
    )
}

export default Contador