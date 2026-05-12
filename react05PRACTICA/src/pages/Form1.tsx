import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Form1() {

    const [name, setName] = useState("")

    const navigate = useNavigate()

    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        setName(e.target.value)
    }

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    )=> {
        event.preventDefault()
        // el segundo argumento pasa la info que queremos que se vaya
        // message es un OBJET
        navigate("/form2", {state : {message : name}})
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Formulario 1</h1>
                Nombre
                <input type="text"
                        value={name}
                        onChange={onChange}
                placeholder={"Ingrese su nombre"}/>

                <input type="submit" value="Enviar"/>
                <div>{name}</div>
            </form>

        </>
    )
}
export default Form1