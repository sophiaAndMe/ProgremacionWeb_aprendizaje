import {Link, useParams} from "react-router-dom";
import axios from "axios";
import type {Post} from "../models/Post.ts";
import {useEffect, useState} from "react";
import {Box, Button, Card, CardActions, CardContent, TextField, Typography} from "@mui/material";


function PostDetalles( ) {


    const {id} = useParams<{id: string}>();
    const url = "https://jsonplaceholder.typicode.com/posts"
    const [post, setPost] = useState<Post>({id: 0, title: "", body: ""});
    const [loading, setLoading] = useState(true);


    // --- POST
    const handleGuardar = () => {
        axios.post<Post>(`${url}`, post)
        .then(res => {
            setPost(res.data);
        })
            .catch(err => alert(err));

    }

    const handlePut = () =>{
        axios.put<Post>(`${url}/${id}`, post)
            .then(res => {
                setPost(res.data);
            })
            .catch(err => alert(err));
    }


    /*
    * IMPORTANTE, si no existe un cambio en ID no cambia la UI
    */

    useEffect(() => {
        setLoading(true);
        axios.get<Post>(`${url}/${id}`)
            .then(response => {
                setPost(response.data)
            })
            .catch(error => console.log(error));
        setLoading(false);
    }, [id])
    return (
        <>
        {loading && <div>Cargando...</div>}

        <br/>
        <Button variant="contained" component={Link} to="/posts">
            REGRESAR
        </Button>

        <Box sx={{maxWidth: 600, margin: "20px auto", px: 2}}>
            <Card variant="outlined" sx={{borderRadius:3}}>
                <CardContent sx={{display: "flex", flexDirection: "column", gap : 3}}>

                    <Box sx={{display: "flex", flexDirection: "column"}}>
                        <Typography  variant="h5" component="h2" sx={{fontWeight: "bold"}}>
                            EDITAR POST

                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{fontWeight: "bold"}}>
                            ID: {post.id}
                        </Typography>
                    </Box>


                    <TextField
                        label={"Titulo de post"}
                        variant="outlined"
                        value={post.title}
                        fullWidth
                        onChange={(e) => setPost({...post, title: e.target.value
                        })}
                    />
                    <TextField
                        label={"Cuerpo del post"}
                        variant="outlined"
                        value={post.body}
                        fullWidth
                        multiline
                        rows={4}
                        sx={{mt: 2}}
                        onChange={(e) => setPost({...post,
                            body: e.target.value})}
                    />

                </CardContent>

                <CardActions sx = {{justifyContent: "flex-start", px : 4, pd :4}}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleGuardar}
                    >
                        GUARDAR
                    </Button>
                    <Button
                        color="inherit"
                        variant="contained"
                        component={Link}
                        to="/posts">
                        REGRESAR
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handlePut}
                    >
                        ACTUALIZAR
                    </Button>

                </CardActions>


            </Card>
        </Box>
        </>
    )
}

export default PostDetalles