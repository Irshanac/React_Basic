import React, { useContext } from "react";
import { Blogcontext } from './Blogs';
import { useParams } from "react-router-dom";

const Details = () => {
    const { blogid } = useContext(Blogcontext);
    const { id } = useParams();
    const blog = blogid(id);

    return (
        <div>
            {!blog ? (
                <h1>This ID does not exist</h1>
            ) : (
                <div>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                </div>
            )}
        </div>
    );
}

export default Details;
