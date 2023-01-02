import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
const submitHandle = (e) => {
    e.preventDefault()
    const blog = {title, body, author}
    setIsPending(true)
    setTimeout(() => {
        fetch('http://localhost:8080/blogs', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(blog)
        })
        .then(() => {
            setIsPending(false)
            history.push("/")
        })
    }, 1500)
    
}
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={submitHandle}>
        <label>Blog title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body: </label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author: </label>
        <select 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isPending ? <button>Add Blog</button> :
         <button disabled>Adding Blog...</button> }
      </form>
    </div>
  );
};

export default Create;
