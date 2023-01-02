import { useState } from 'react';
import useFetch from './hooks/useFetch';
import BlogList from './props/BlogList';

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch("http://localhost:8080/blogs")

    const title = "Space for home"
    const [value, setValue] = useState('9')
    const [color , setColor] = useState('red')
    const handleClick = (e) =>{
        value === '9' ? setValue('10') : setValue('9')
    } 
    const handleColor = () => {
        color === 'red' ? setColor('yellow') : setColor('red')
        console.log(color)
    }
    // const deleteBlog = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs)
    // }


    return ( 
        <div className="home">
            <h1>
                {title}
            </h1>
            <h2>New feeds</h2>
            <p>{value}</p>
            <button onClick = {handleClick}>
                Click me
            </button>
            <button onClick = {handleColor} style = {{backgroundColor: color}}>
                Change color
            </button>
            {error && <p>{error}</p>}
            {isLoading && <div className='loader'></div>}
            {blogs && <BlogList blogs = {blogs}/>}
        </div>
     );
}
 
export default Home;