import React, {useState} from 'react';
import { firestore } from '../firebase';
import { useFormInput } from '../hooks';

import classes from './Button.module.css'

export default function CreatePost() {
    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');
  
    function handleSubmit(e) {
      //Page Not automatic reload When form Submit.
      e.preventDefault();
  
      console.log('title', title);
      console.log('subTitle', subTitle);
      console.log('content', content);

      firestore.collection('posts').add({
        title: title.value,
        content:content.value ,
        subTitle:subTitle.value,
        createdAt: new Date(),
      });
    }


    return (
      <div className="create-post">
        <h1 style={style.heading}>Create Post</h1>
      
        <button className={classes.createPostBtn}>ItWorks?</button>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Title</label>
            <input {...title} />
          </div>
  
          <div className="form-field">
            <label>Sub Title</label>
            <input
              {...subTitle}
            />
          </div>
  
          <div className="form-field">
            <label>Content</label>
            <textarea
             {...content}
            ></textarea>
          </div>
  
          <button className={classes.createPostBtn}>Create Post</button>
        </form>
      </div>
  )
}

const style={
  heading:{
    backgroundColor:'yellowgreen'
  }
}
