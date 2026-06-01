import {useState} from "react";
import type {Post} from "./dto/Post.ts";
import axios from "axios";

function ConsumoAxios () {


    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState<Post[]>([])

    const handleClick = () => {
        setLoading(true)
        axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
            .then(reponse => {setPost(reponse.data)})
            .catch(e => alert(e))
            .finally(() => setLoading(false))

    }
    return(
        <>
            <h1>CONSUMO AXIOS</h1>
            <button onClick={handleClick}>
                Busqueda
            </button>
            {loading && <p>Cargando...</p>}

            <table style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>

                    </tr>
                </thead>
                <tbody>
                {
                    post.map((post) =>
                        <tr key = {post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    )
                }

                </tbody>
            </table>

        </>
    )
}

export default ConsumoAxios