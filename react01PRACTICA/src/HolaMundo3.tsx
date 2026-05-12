
export interface Hello3Props {
    name : string
    edad? : number
}

function HolaMundo3 (props : Hello3Props) {
    return (

        <>
            <h4> Hola mundo mi nombre es {props.name} y mi edad es {props.edad}</h4>
            <br/>

        </>
    )
}

export default HolaMundo3