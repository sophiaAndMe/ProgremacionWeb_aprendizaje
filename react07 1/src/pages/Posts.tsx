import {useEffect, useState} from "react";
import {Button, Container, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import axios from "axios";
import type {Post} from "../models/Post.ts";
import {Link} from "react-router-dom";
import {Details} from "@mui/icons-material";



function Posts() {

    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(false)


    const fetchPosts = async () => {

        setLoading(true)


    }

    useEffect(() => {
        axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .then(response  => {
                setPosts(response.data)
            })
            .catch(error => {
                alert(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])


return (
    <Container sx={{ mt : 5 } }>
        <Typography variant="h4" gutterBottom>
            Posts
        </Typography>

        <Button variant="contained"
                color="primary"
                onClick={fetchPosts}
                disabled={loading}

        >
            {loading ? "Cargando..." : "Cargar Post"}

        </Button>

        <Table
            sx={{
                mt: 2,
                borderCollapse: 'separate',
                '& .MuiTableCell-head': {
                    borderBottom: '2px solid',
                    borderBottomColor: 'primary.main', // Color primario de tu tema
                    fontWeight: 'bold'
                },
                '& .MuiTableCell-body': {
                    borderBottom: '1px solid rgba(224, 224, 224, 0.5)'
                }
            }}
        >



        <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Body</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
            {
                posts.map((post)=>

                    <TableRow key={post.id}>
                        <TableCell> {post.id}</TableCell>
                        <TableCell> {post.title}</TableCell>
                        <TableCell> {post.body}</TableCell>
                        <TableCell>
                            <Button variant="outlined" color="info" startIcon={<Details/>}
                                    component = {Link} to = {`/posts/${post.id}`}>
                                Detalles
                            </Button>
                        </TableCell>

                    </TableRow>
                )
            }
            </TableBody>


        </Table>

    </Container>
)

}

export default Posts;