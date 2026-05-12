import {useState} from "react";

function MyForm(){

    const [name, setName] = useState("")

    const hanleSubmit = (e:React.FormEvent<HTMLFormElement>)=> {
        alert(`texto Ingresado: '${name}'`)
        e?.preventDefault()
    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }


    return(
        <>
            <form onSubmit={hanleSubmit}>
                <div>
                    Nombre: <input type="text" value={name} onChange={handleChange}/>
                </div>
                <input type="submit" value="enviar" />
                <input type="submit" value="enviar2" />
                <input type = "button" value={"Botton normal"}></input>
                <div>{name}</div>
            </form>


        </>
    )
}

export default MyForm