import React, {useState} from 'react';
import { firestore } from '../firebase';
import { useFormInput } from '../hooks';
import styled , {css} from 'styled-components';
// import classes from './Button.module.css'

const BlogHeading = styled.h1`
    text-align: center;
    background-color:yellowgreen;
`;

const ButtonStyle = styled.button`
    height: 33px;
    background: ${(props) => (props.primary ? 'blue' :'yellow')};
    border: 0;
    color: #fff;
    padding: 8px;
    font-size: 15px;
    border-radius: 3px;
    cursor: pointer;
    ${(props) => 
        props.primary && css `
          border: 4px solid red;
        `  
    }
`

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
        <BlogHeading>Create Post</BlogHeading>
      

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
  
          <ButtonStyle primary>Create Post</ButtonStyle>
        </form>
      </div>
  )
}

// const style={
//   heading:{
//     backgroundColor:'yellowgreen'
//   }
// }
