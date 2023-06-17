import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogHeading = styled.h1`
    text-align: center;
    background-color:yellowgreen;
`;

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore.collection('posts').get().then((snapshot) => {
      const posts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      })
      console.log('posts', posts);
      setPosts(posts)
    })
  }, [])
  return (
    <div className='home'>
      <BlogHeading>Tech Blogs</BlogHeading>
      <div id='blog-by'>JITU</div>

      {posts.map((post, index) => (
        <div className='post' key={`post-${index}`} >
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subTitle}</p>
        </div>
      ))}

    </div>
  )
}
