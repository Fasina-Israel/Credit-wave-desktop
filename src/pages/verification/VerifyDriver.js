import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './VerificationStyle.css';
import ContentImage from '../../assets/image/ContentImage.svg';
import FormHeader from '../../components/content/FormHeader';
import { Formik, Field } from 'formik';
import validator from 'validator';
import { TailSpin } from 'react-loader-spinner';
import EyeOpen from '../../assets/icon/eye-open.svg';
import EyeSlash from '../../assets/icon/eye-slash.svg';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { forgotPasswordVerification } from '../../utils/api';
import { useLocation, useParams } from 'react-router-dom';

const DriverVerificationPage = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState('');
    const togglePasswordVisibility = () => {
        setVisible(!visible);
    };
    // const [loading, setLoading] = useState(false);
    // const [otp, setOtp] = React.useState('');
    // const { email } = useParams();
    console.log(email, 'emailFromUseParams');
    // const handleChange = (newValue) => {
    //     setOtp(newValue);
    // };
    const submitOtp = () => {
        console.log('submit');
        const urlParams = new URLSearchParams(window.location.search);

        // Get the 'email' parameter from the URL
        const emailParam = urlParams.get('email');

        const url = forgotPasswordVerification(emailParam);
        console.log(url, 'url');
        const requestOptions = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
            //   body: JSON.stringify({
            //     otp: otpValue,
            //     email: userEmail.email,
            //   }),
        };
        // console.log(otp, 'inputsuccesful');
        const Fetch = async () => {
            const response = await fetch(url, requestOptions);
            return response;
        };
        Fetch()
            .then((res) => {
                console.log(res.status, 'hello');
                if (res.status === 201 || res.status === 200 || res.status === 202) {
                    // navigate('ResetPassword', {
                    //     email: userEmail,
                    //     otp: otp
                    // });
                    console.log('succesful');
                }
            })
            .catch((err) => {
                console.log(err, 'error');
                // console.log(otp, 'otpvaluesError');
            });
    };
    useEffect(() => {
        // Parse URL parameters
        const urlParams = new URLSearchParams(window.location.search);

        // Get the 'email' parameter from the URL
        const emailParam = urlParams.get('email');
        console.log(emailParam, 'emailParams');

        // Update the state with the email value
        if (emailParam) {
            setEmail(emailParam);
        }
        submitOtp();
    }, []);
    // useEffect(() => {
    //     // setOtp();
    //     if (otp.length === 4) {
    //         submitOtp();
    //     }
    // }, []);
    console.log(window.location.href, 'wd');

    const paramsString = window.location.href;
    const searchParams1 = new URLSearchParams(paramsString);

    // const userEmail = email;

    // console.log(otp, 'otp');
    return (
        <>
            <Navbar />
            <section className="contentBackground-container">
                <div className="contentBackground-container1">
                    <div className="contentBackgroundImage">
                        <img src={ContentImage} alt="" style={{ height: '33rem' }} />
                    </div>
                </div>
                <div className="contentBackground-container2">
                    {/* <div className="header">
                        <FormHeader />
                    </div> */}
                    <div className="verification-container">
                        <div className="verification-title">
                            <h6> We sent you a code</h6>
                        </div>
                        <div className="verification-text">
                            <h6> A 4 digit verification code has been sent to your email Kindly input the code.</h6>
                        </div>
                        <div className="otp">
                            <MuiOtpInput value={''} onChange={''} />
                        </div>
                        <div className="resend-button-container">
                            <button className="resend-button" onClick={() => submitOtp()}>
                                Resend
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DriverVerificationPage;
