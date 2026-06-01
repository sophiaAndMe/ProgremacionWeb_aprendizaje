import {Container, Typography} from "@mui/material";

function Home () {

    return (
        <>
            <Container sx = {{mt: 5}}>
                <Typography variant = "h4">
                    BIENVENIDO!
                </Typography>

                <Typography variant={"h6"}>
                    Aplicacion para consultar
                </Typography>
            </Container>



        </>
    )
}

export default Home