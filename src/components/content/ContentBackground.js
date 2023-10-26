import React from 'react';
import './Styles.css';
import ContentImage from '../../assets/image/ContentImage.svg';
import FormHeader from './FormHeader';

const ContentBackground = () => {
  return (
   <section className='contentBackground-container'>
    <div className= 'contentBackground-container1'>
        <div className= 'contentBackgroundImage'>
            <img src={ContentImage} alt="" style={{height:'33rem'}}/>
        </div>
    </div>
    <div className= 'contentBackground-container2'>
        <div className="header">
           <FormHeader/>
        </div>
        <div className='form'>

        </div>
    </div>
   </section>
  );
};

export default ContentBackground;