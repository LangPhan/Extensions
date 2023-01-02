 import { useState } from "react";
import {useHistory, useParams} from "react-router-dom";
 import useFetch from "./hooks/useFetch";

const BlogDetail = () => {
    
    const { id } = useParams()
    const {data:blog, isLoading, error} = useFetch("http://localhost:8080/blogs/"+id)
    const history = useHistory()
    const [isDeleting, setIsDeleting] = useState(false)
    const deleteHandle = () => {
        setIsDeleting(true)
        setTimeout(() => {
            fetch('http://localhost:8080/blogs/'+id, {
                method:'DELETE'
            })
            .then(() =>{
                setIsDeleting(false)
                history.push('/')
            })
        },1000)
    }
    return (
        <div className="blog-details">
            {isLoading && <div className='loader'></div>}
            {error && <p>{error}</p> }
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    {!isDeleting ? <button onClick={deleteHandle}>Delete</button> :
                    <button disabled>Deleting...</button>}
                </article>
            )}
            
        </div> 
     );
}
 
export default BlogDetail;