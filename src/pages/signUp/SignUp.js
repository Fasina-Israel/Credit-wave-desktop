import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import '../../components/content/Styles.css';
import ContentImage from '../../assets/image/ContentImage.svg';
import FormHeader from '../../components/content/FormHeader';
import { Formik, Field } from 'formik';
import validator from 'validator';
import { TailSpin } from 'react-loader-spinner';
import EyeOpen from '../../assets/icon/eye-open.svg';
import EyeSlash from '../../assets/icon/eye-slash.svg';
import { registerUrl } from '../../utils/api';
import notify from '../../hooks/UseNotify';

const Signup = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setVisible(!visible);
    };
    const [loading, setLoading] = useState(false);
    const submit = useCallback(async (values) => {
        const details = {
            companyName: values.companyName,
            email: values.email,
            password: values.password
        };
        try {
            setLoading(true);
            const requestOptions = {
                method: 'post',
                body: JSON.stringify(details),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                    // " Access-Control-Allow-Origin": "*",
                    // 'Access-Control-Allow-Methods': 'PUT, POST, OPTIONS',
                    // 'Access-Control-Allow-Credentials': true
                }
            };
            console.log(details, 'details');
            const response = await window.fetch(registerUrl, requestOptions);
            if (response.ok) {
            } else {
                const data = await response.json();
                notify(data.message, true);
                setLoading(false);
            }
        } catch (err) {
            console.log(err, 'err');
            notify(err.message, true);
            setLoading(false);
        }
    }, []);
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
                    <div className="header">
                        <FormHeader />
                    </div>
                    <div className="form">
                        <Formik
                            initialValues={{
                                companyName: '',
                                email: '',
                                password: ''
                            }}
                            validate={(values) => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Email cannot be empty !';
                                } else if (!validator.isEmail(values.email)) {
                                    errors.email = 'Please enter a valid email !';
                                }
                                if (!values.password) {
                                    errors.password = 'Password cannot be empty !';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                console.log('mounted');
                                submit(values);
                                setSubmitting(false);
                            }}
                        >
                            {({ isValid, values, errors, dirty, touched, handleSubmit, handleBlur }) => (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <div>
                                            <div className="input-container">
                                                <div className="input-section">
                                                    <h6>Name</h6>
                                                    <div>
                                                        <Field
                                                            className="input"
                                                            id="name"
                                                            type="text"
                                                            name="companyName"
                                                            value={values.companyName}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter your name"
                                                        />
                                                    </div>
                                                    {/* <div>{touched.email && errors.email ? <div>{errors.email}</div> : null}</div> */}
                                                </div>
                                                <div className="input-section">
                                                    <h6>Email</h6>
                                                    <div>
                                                        <Field
                                                            className="input"
                                                            id="email"
                                                            type="text"
                                                            name="email"
                                                            value={values.email}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter your email"
                                                        />
                                                    </div>
                                                    <div>{touched.email && errors.email ? <div>{errors.email}</div> : null}</div>
                                                </div>
                                                <div className="input-section">
                                                    <h6>Password</h6>
                                                    <div>
                                                        <Field
                                                            className="input"
                                                            id="password"
                                                            type={visible ? 'text' : 'password'}
                                                            name="password"
                                                            value={values.password}
                                                            onBlur={handleBlur}
                                                        />
                                                        <div
                                                            className="eye-icon"
                                                            onClick={togglePasswordVisibility}
                                                            onKeyDown={togglePasswordVisibility}
                                                            role="button"
                                                            tabIndex={0}
                                                        >
                                                            <img
                                                                src={visible ? EyeOpen : EyeSlash}
                                                                alt=""
                                                                style={{
                                                                    display: 'flex',
                                                                    position: 'absolute',
                                                                    right: '18rem',
                                                                    top: '2.5rem',
                                                                    cursor: 'pointer'
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>{touched.password && errors.password ? <div>{errors.password}</div> : null}</div>
                                                </div>
                                                <div>
                                                    <h5>I have read and accepted terms and conditions aggrements of NEMT</h5>
                                                </div>
                                                <div>
                                                    <button
                                                        className="form-button"
                                                        type="submit"
                                                        variant="contained"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {loading && <TailSpin color="#FFF" height={20} width={20} />}
                                                        Create Account
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;
