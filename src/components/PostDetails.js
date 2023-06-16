import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase';
import { useParams } from 'react-router-dom';

export default function PostDetails() {
    const [post,setPost] = useState({});
    const {postId} = useParams();
    useEffect(()=>{
      firestore.collection('posts').doc(postId).get().then((snapshot)=>{
        console.log('snapshot',snapshot.data());
        setPost(snapshot.data())
      })
    }, [])
  return (
    <div className='post-detail'>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </div>
  )
}
