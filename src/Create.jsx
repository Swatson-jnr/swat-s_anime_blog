import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Create = () => {
  const [title, setTitle] = useState('')
  const [content, setContent ] = useState('')
  const [ author, setAuthor ] = useState('')
  const [isPending, SetIsPending] = useState(false)
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, content, author };
  
    console.log('Sending blog:', blog);

    SetIsPending(true);
  
    axios.post('https://retoolapi.dev/BhPH3W/data/', blog, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => {
        console.log('Blog added');
        SetIsPending(false);
        navigate('/');
      })
      .catch((error) => {
        console.error('There was an error adding the blog:', error);
        SetIsPending(false);
      });
  };


  return (
    <div className='create-blog'>
      <h2>Create a new Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
        type='text'
        required
        value={title}
        onChange={ (e) => setTitle(e.target.value)}
        ></input>

        <label>Blog Content:</label>
        <textarea
        required
        value={content}
        onChange={ (e) => setContent(e.target.value)}
        ></textarea>

        <label>Blog Author:</label>
        <input
        type='text'
        required
        value={author}
        onChange={ (e) => setAuthor(e.target.value)}
        ></input>

        { !isPending && <button> Add Blog </button> }
        {isPending && <button disabled> Adding blog.... </button> }
      </form>
    </div>
  )
}

export default Create
