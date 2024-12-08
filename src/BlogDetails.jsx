import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blogs, isPending, error } = useFetch('https://retoolapi.dev/BhPH3W/data/' + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`https://retoolapi.dev/BhPH3W/data/${blogs.id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('There was an error deleting the blog:', error);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedBlog = {
      title: formData.title,
      body: formData.content,
      author: formData.author,
    };

    axios.put(`https://retoolapi.dev/BhPH3W/data/${id}`, updatedBlog)
      .then((response) => {
        console.log('Blog updated successfully');
        setEditMode(false); 
        navigate(`/blogs/${id}`); 
      })
      .catch((error) => {
        console.error('There was an error updating the blog:', error);
      });
  };

  // Avatar generation logic
  const AvatarGen = ({ author }) => {
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
      const avatar = createAvatar(avataaars, {
        seed: author,
      });

      const svg = avatar.toString();
      setAvatar(svg);
    }, [author]);

    return <div style= {{
      width: '90px',
      height: '90px'
    }}
     dangerouslySetInnerHTML={{ __html: avatar }} 
     />;
  };

  return (
    <div>
      <h2>Blog details - {id}</h2>

      {isPending && <div>Loading...</div>}

      {error && <div>{error}</div>}

      {blogs && (
        <div className="blog-details">
          <article>
            <div className="author-info">
              <AvatarGen author={blogs.author} />
              <h2>{blogs.title}</h2>
            </div>
            <p>Written by {blogs.author}</p>
            <p>{blogs.content}</p>
          </article>
          <button onClick={handleDelete}>Delete Blog</button>
          <Link to={`/edit/${blogs.id}`}>
            <button>Edit Blog</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
