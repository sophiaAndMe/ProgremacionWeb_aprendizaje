import {useLocation, useNavigate} from "react-router-dom";

function Form2() {

    const navigate = useNavigate()

    const location = useLocation()

    // esta buscando un objeto llamado 'message'
    const state = location.state as {message : string}

    const handleReset = () => {
        navigate("/")
    }

    return (
        <>
            <form>
                <h1>Formulario 2</h1>
                <p>
                    Nombre recibido: <b> {state.message}</b>

                </p>
                <button onClick={handleReset}>Regresar</button>

            </form>
        </>
    )
}
export default Form2