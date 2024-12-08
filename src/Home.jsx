import React, { useEffect } from 'react'
import { useState } from 'react'
import BlogList from './BlogList.jsx';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error} = useFetch('https://retoolapi.dev/BhPH3W/data/')

  return (

    <div className="home">  
      { error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList  blogs= { blogs }  title = 'All Blogs!'/>}
    </div>
  )
}

export default Home
