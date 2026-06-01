import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {Post} from "../dto/Post.ts";
import {Box, Button, Card, CardContent, TextField, Typography} from "@mui/material";
import axios from "axios";

function PostDetails () {


    const {id} = useParams<{id : string}>()
    const url = "https://jsonplaceholder.typicode.com/posts"
    const [post, setPost] = useState<Post>({id:0, title: "", body:""})


    // --- POST

    const handleGuardar = () => {

        axios.post<Post>(`${url}`, post)
            .then(res => setPost(res.data))
            .catch(e => alert(e))
    }

    /*
   * IMPORTANTE, si no existe un cambio en ID no cambia la UI
   */

    useEffect(() => {

        axios.get<Post>(`${url}/${id}`)
            .then(response => setPost(response.data))
            .catch(e => alert(e))
    }, [id]);


    return(
        <>
            <br/>
            <Button variant={"contained"} component={Link} to={"/posts"}>
                Regresar
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

                    <CardContent sx = {{justifyContent: "flex-start", px : 4, pd :4}}>
                        <Button
                        variant={"contained"}
                        color = "primary"
                        size={"large"}
                        onClick={handleGuardar}>
                            Guardar
                        </Button>

                        <Button
                            variant={"contained"}
                            color = "secondary"
                            size={"large"}
                            component={Link}
                            to = {`/post/${post.id}/comments`}
                            sx = {{margin: "20px auto"}}
                            >
                            Ver comentarios
                        </Button>

                    </CardContent>
                </Card>

            </Box>


        </>
    )
}

export default PostDetails