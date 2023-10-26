import React, {useRef} from 'react';
import { FaTimes, FaBars} from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import './Style.css';
import QwipLogo from '../../assets/image/QwipLogo.png';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const navRef = useRef();
    const navigate = useNavigate();
    const showNavbar =()=>{
        navRef.current.classList.toggle('responsive_nav');
    };
  return (
    <header>
        <div className='container'>
            <div style={{ display:'flex', flexDirection:'row', width: '95%'}}>
            <img className="qwipLogo" src={QwipLogo} alt=''  onClick={()=>{navigate('/')}}/>
                <nav ref={navRef}>
                    <div className='container'>
                        <div className='link-container'>
                            <div className='link'>
                                <a href='/#'>
                                    <h4>
                                        Company 
                                    </h4>
                                    </a>
                                <FiChevronDown />
                            </div>
                            <div className='link'>
                                <a href='/#'>
                                    <h4>
                                        Safety 
                                    </h4>
                                    </a>
                                <FiChevronDown/>
                            </div>
                            <div className='link'>
                                <a href='/#'>
                                     <h4>
                                        Support/Help
                                        </h4>
                                    </a>
                            </div>
                        </div>
                        <div style={{ display:'flex'}}>
                            <div className='login'>
                                <div>
                                    <a  style={{ color:'#2D6CDF'}}href='/login'>
                                        <h4>
                                            Log In 
                                        </h4>
                                        </a>
                                </div>
                                <div >
                                    <a style={{ fontSize:'14px',backgroundColor:'#2D6CDF', color:'#FFF', padding: '0.6rem 1.0rem', borderRadius:'1.5rem'}} href='/join'>Sign Up</a>
                                </div>
                            </div>
                            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                                <FaTimes />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            <div>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </div>
        </div>
        
    </header>
  );
};

export default Navbar;