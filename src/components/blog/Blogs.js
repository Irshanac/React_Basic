import React, { createContext, useState } from "react";

export const Blogcontext = createContext();

export const Blogscontain = ({ children }) => {
    const [blog, setBlog] = useState([]); // Initialize as an empty array

    const addblog = (title, body) => {
        const newBlog = { id: blog.length + 1, title, body };
        setBlog(prevBlogs => [...prevBlogs, newBlog]); // Update state immutably
    };

    const blogid = (id) => {
        return blog.find(blog => blog.id === parseInt(id)); // Ensure ID is compared correctly
    };

    return (
        <Blogcontext.Provider value={{ blog, addblog, blogid }}>
            {children}
        </Blogcontext.Provider>
    );
};
