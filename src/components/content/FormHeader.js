import React from 'react';
import './FormStyles.css';
import HorizontalLine from '../../assets/image/HorizontalLine.svg';


const FormHeader = () => {
    return (
        <div className="welcome-container">
            <h3> Welcome to NEMT</h3>
            <h6>Get ready to enjoy all the features and benefits we have to offer. It's quick, easy, and free!</h6>
            {/* <div className="signup-button">
                <button>
                    <img src={GoogleIcon} alt="" />
                    Signup with Google
                </button>
            </div> */}
            <div className="horizontal-line">
                <img src={HorizontalLine} alt="" className="horizontal-line-image" />
            </div>
        </div>
    );
};

export default FormHeader;
