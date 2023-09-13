import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddtoBookmark ,  handleMarkasread}) => {
    const [blogs , setBlogs] = useState([])

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl my-3">Blogs</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id}  
                    blog={blog}
                    handleAddtoBookmark = {handleAddtoBookmark}
                    handleMarkasread={ handleMarkasread}>

                
                     </Blog>)
            }

        </div>
    );
};

Blogs.propTypes = {
    handleAddtoBookmark : PropTypes.func.isRequired,
    handleMarkasread : PropTypes.func.isRequired
}
export default Blogs;