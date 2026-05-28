import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import HomeIc from "@mui/icons-material/Home";
import {Help} from "@mui/icons-material";
import {Link} from "react-router-dom";


function NavBar() {

    return (
        <>

            <AppBar position= "static" >

                <Toolbar>
                    <Typography variant="h6" sx={{flexGrow: 1}}>
                        My aplicacion
                    </Typography>
                        <Button color="inherit" component={Link} to= "/" startIcon={<HomeIc/>} > Inicio </Button>
                        <Button color="inherit" component={Link} to= "/about" startIcon={<Help/>}> Acerca de  </Button>
                        <Button color="inherit" component={Link} to= "/posts"> Posts  </Button>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default NavBar