import React from 'react';
import './Style.css';
import AppleIcon from '../../assets/icon/apple.png';
import GooglePlayIcon from '../../assets/icon/google-icon.png';
import { useNavigate } from 'react-router-dom';


const HeroPage = () => {
    const navigate = useNavigate();
  return (
    <section className='hero-container'>
        <div className='link'>
                    <div className='link2'>
                        {/* <button className='apple-button'>
                            <div className='img1'>
                                <img className="r-Img" src={AppleIcon} alt='#'/>
                            </div>
                            <div className='text'>
                                Download on App Store
                            </div>
                            </button> */}
                        <button className='google-button'>
                            <div className='img2'>
                                <img className="g-img"src={GooglePlayIcon} alt='#'/>
                            </div>
                            <div className='text'>
                                Get on Google Play Store
                            </div>
                            </button>
                    </div>
        </div>
        <div className='hero-content'>
            <div className='header'>
                <h1>
                    Automate your NEMT existing work
                    flow and scale.
                </h1>
                <h3 className="h3">
                    Providing  you with the tools and support necessary to streamline your business operations, freeing up your time and resources to focus on driving growth and delivering an exceptional customer experience.
                </h3>
            </div>
            <div className ='btn-Class'>
                <button  className="button" onClick={()=>{navigate('/join')}}>
                    <h4>Get Started</h4>
                </button>
            </div>
        </div>
    </section>
  );
};

export default HeroPage;