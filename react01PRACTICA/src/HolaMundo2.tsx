function HolaMundo2 (props : {name: string, edad: number}) {

    const handleClick = () => {

        alert(`Mi nombre es ${props.name} y mi 
                    edad es #${props.edad}`)
    }


    return (

        <>
            <h4> Hola mundo mi nombre es {props.name} y mi edad es {props.edad}</h4>
            <br/>
            <button onClick={handleClick}> Alerta nombre y edad</button>

        </>
    )
}

export default HolaMundo2