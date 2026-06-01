import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import type {Comment} from "../dto/Comment.ts";

function Comment(){


    const [comments, setComments] = useState<Comment[]>([]);


    // aqui guarda el id de la ruta
    const { id } = useParams();

    useEffect (() => {


        axios.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => {
                setComments(response.data);
            })
            .catch(error => alert(error))

    },[id])


    return(
        <>
            <h1>Comentarios</h1>
            <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to={`/posts/${id}`}>
                Regresar
            </Button>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Body</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {comments.map((comment) => (
                        <TableRow key={comment.id}>
                            <TableCell>{comment.id}</TableCell>
                            <TableCell>{comment.name}</TableCell>
                            <TableCell>{comment.email}</TableCell>
                            <TableCell>{comment.body}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>


        </>
    )
}

export default Comment