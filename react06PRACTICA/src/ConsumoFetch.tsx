import {useState} from "react";
import type {Post} from "./dto/Post.ts";

function ConsumoFetch() {


    const [post, setPost] = useState<Post|null>(null)
    const [loading, setLoading] = useState(false)
    const [postId, setPostId] = useState("1")

    const handleClick = () => {
        setLoading(true)
        fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`,
            {method: 'GET',
            headers:{
                    'Content-Type' : 'application/json'}
            }).then(
                reponse => reponse.json()
        ).then(data => setPost(data))
            .finally(() => setLoading(false))
    }

    return(
        <>
            <h1>Consumo Fetch</h1>
            Id: <input
            type={"text"}
            placeholder={"id"}
            value={postId}
            onChange={e => setPostId(e.target.value)}/>

            <button onClick={handleClick}>
                Consultar
            </button>
            {loading && <p>Cargando....</p>}
            {
                post && (
                    <div>
                        <p>ID: {post.id}</p>
                        <p>Title: {post.title}</p>
                        <p>Body: {post.body}</p>
                    </div>
                )


            }


        </>
    )
}

export default ConsumoFetch