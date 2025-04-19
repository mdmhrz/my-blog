import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch("blogs.json")
        .then(res => res.json())
        .then(data=>setBlogs(data))
    },[]);
    

    return (
        <div>
            <h1>Total: {blogs.length}</h1>
            <div className='grid grid-cols-2 gap-4'>
                {
                    blogs.map((blog) => <Blog blog={blog} handleBookmark={handleBookmark}> </Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;