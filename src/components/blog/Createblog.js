import React, { useContext, useState } from 'react';
import { Blogcontext } from './Blogs';    
import { useNavigate } from 'react-router-dom';

const Createblog = () => {
    const navigate = useNavigate();
    const { addblog } = useContext(Blogcontext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addblog(title, body);
        navigate('/blogs');
    };

    return (
        <div>
            <h1>Write a Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Heading</label>
                <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} required />
                <br/>
                <label>Content</label>
                <textarea rows={10} cols={10} onChange={(e) => setBody(e.target.value)} value={body} required></textarea>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Createblog;
