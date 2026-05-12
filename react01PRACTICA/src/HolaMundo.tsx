function HolaMundo () {

    const handleClick = () => {
        alert(`Hiciste click al componente`)
    }

    return (
        <>
            <h4> Hola Mundo!</h4>
            <p>Esto es un componente</p>
            <button onClick={handleClick}> Boton</button>
        </>

    )
}

export default HolaMundo