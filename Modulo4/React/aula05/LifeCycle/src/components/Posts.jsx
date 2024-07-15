import { useState, useEffect } from "react";

function PostProfile() {
    const [post, setPost] = useState(0);

    useEffect(() => {
        const PostId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        },1000)

        const fetchPostData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${PostId}`);
            const PostData = await response.json(); 
            setPost(PostData);
        }

        fetchPostData();

        return ()=> setPost(null)

    }, [])

    
    return (
        <div>
            {post ? (
                <div>
                    <h3>{post.title}</h3>
                    <h5>{post.body}</h5>
                </div>
            ) : (
                <p>Carregando perfil de Usuario</p>
            )}
        </div>
    )

}

export default PostProfile