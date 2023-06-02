import React, {useState} from 'react';
import { firestore } from '../firebase';

export default function CreatePost() {
    const [title, setTitle] = useState();
    const [subTitle, setSubTitle] = useState();
    const [content, setContent] = useState();
  
    function handleSubmit(e) {
      //Page Not automatic reload When form Submit.
      e.preventDefault();
  
      console.log('title', title);
      console.log('subTitle', subTitle);
      console.log('content', content);

      firestore.collection('posts').add({
        title: title,
        content: content,
        subTitle: subTitle,
        createdAt: new Date(),
      });
    }


    return (
      <div className="create-post">
        <h1>Create Post</h1>
  
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
  
          <div className="form-field">
            <label>Sub Title</label>
            <input
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>
  
          <div className="form-field">
            <label>Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
  
          <button className="create-post-btn">Create Post</button>
        </form>
      </div>
  )
}
