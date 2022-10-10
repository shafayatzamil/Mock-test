import React from 'react';
import './Blog.css';


const Blog = () => {
    return (
        <div className='blog-container'>
            <h2 className='ques-headline'> what is the purpose of react router?</h2>
            <p>React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.</p>
            <h2 className='ques-headline'>what does context API work?</h2>
            <p>The Context API can be used to share data with multiple components, without having to pass data through props manually.</p>
            <h2 className='ques-headline'>UseRef work?</h2>
            <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
        </div>
    );
};

export default Blog;