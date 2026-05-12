import {useEffect, useState} from "react";

function Contador (){


    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log("Componente monetado")

        // cuando el componente se desmonta
        return () => console.log("Componente desmontado")
    })

    useEffect(() => {
        console.log(`componente cambiado a ${contador}`)
    }, [contador])


    const handleUp = () => {
        setContador(contador +1)
    }
    const handleDown = () => {
        setContador(contador -1)
    }

    return (
        <>
            <hr/>
            <div>Valor {contador}</div>
            <br/>
            <button onClick={handleUp}>+</button>
            <button onClick={handleDown}>-</button>

        </>
    )
}

export default Contador