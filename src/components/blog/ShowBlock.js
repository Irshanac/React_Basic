import React, { useContext } from "react";
import { Blogcontext } from './Blogs';
import { Link } from 'react-router-dom'; // Use Link for navigation

const ShowBlog = () => {
    const { blog } = useContext(Blogcontext);

    return (
        <div>
            {blog.length === 0 ? (
                <h3>No blogs available</h3>
            ) : (
                blog.map(blog => (
                    <div key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </div>
                ))
            )}
        </div>
    );
}

export default ShowBlog;
