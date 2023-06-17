import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogHeading = styled.h1`
    text-align: center;
    background-color:yellowgreen;
`;

const Post = styled.div`
    border: 1px solid #e1e1e1;
    padding: 10px 10px;
    border-radius: 5px;
    margin-top: 10px;

  &:hover {
    border:1px solid #2196f3;
  }
  p{
      color:grey;
      font-size: 13px;
  }
  a{
    margin: 0;
    padding: 0;
    font-size: 25px;
    font-weight: bold;
    color: black;
  }
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
        <Post className='post' key={`post-${index}`} >
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subTitle}</p>
        </Post>
      ))}

    </div>
  )
}
