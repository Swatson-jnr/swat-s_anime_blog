import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const [title, setTitle] = useState('');
  const [content, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); 

 
  useEffect(() => {
    if (id) {
      axios.get(`https://retoolapi.dev/BhPH3W/data/${id}`)
        .then((response) => {
          const blog = response.data;
          setTitle(blog.title);
          setBody(blog.content);
          setAuthor(blog.author);
        })
        .catch((error) => {
          console.error('Error fetching blog data:', error);
        });
    }
  }, [id]); 

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, content, author };

    setIsPending(true);

    axios.put(`https://retoolapi.dev/BhPH3W/data/${id}`, blog, { 
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log('Blog updated');
        setIsPending(false);
        navigate('/'); 
      })
      .catch((error) => {
        console.error('There was an error editing the blog:', error);
        setIsPending(false);
      });
  };

  return (
    <div className='create-blog'>
      <h2>Edit Blog {id}</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Body:</label>
        <textarea
          required
          value={content}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog Author:</label>
        <input
          type='text'
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        { !isPending && <button> Edit Blog </button> }
        {isPending && <button disabled> Editing blog.... </button> }
      </form>
    </div>
  );
}

export default Edit;
