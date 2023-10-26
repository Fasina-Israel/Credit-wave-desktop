import React, { useState } from 'react';
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

const ChangePassword = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setVisible(!visible);
    };
    const [loading, setLoading] = useState(false);
    const submit = async (values) => {
        setLoading(true);
        const details = {
            email: values.email,
            initialPassword: values.initialPassword,
            newPassword: values.newPassword,
            confirmPassword: values.confirmPassword
        };
        console.log(details, 'details');
        // try {
        //     const requestOptions = {
        //         method: 'POST',
        //         body: JSON.stringify(details),
        //         headers: {
        //             'content-type': 'application/json'
        //         }
        //     };
        //     const response = await fetch(createPasswordUrl + '/' + token, requestOptions);
        //     if (response.ok) {
        //         setLoading(false);
        //         const data = await response.json();
        //         notify('Succesful', false);
        //         navigate('/create_password_successful');
        //     } else {
        //         setLoading(false);
        //         const data = await response.json();
        //         // console.log(data.data, true);
        //         // notify(data.data, true);
        //     }
        // } catch (err) {
        //     setLoading(false);
        //     console.log(err);
        //     notify(err.message, true);
        // }
    };

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
                                email: '',
                                initialPassword: '',
                                newPassword: '',
                                confirmPassword: ''
                            }}
                            validate={(values) => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Email cannot be empty !';
                                } else if (!validator.isEmail(values.email)) {
                                    errors.email = 'Please enter a valid email !';
                                }
                                if (!values.initialPassword) {
                                    errors.password = 'Password cannot be empty !';
                                }
                                if (!values.newPassword) {
                                    errors.password = 'Password cannot be empty !';
                                }
                                if (!values.confirmPassword) {
                                    errors.password = 'Password cannot be empty !';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                submit(values);
                                setSubmitting(false);
                            }}
                        >
                            {({ isValid, values, errors, dirty, touched, handleSubmit, handleBlur, handleChange }) => (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <div>
                                            <div className="input-container">
                                                <div className="input-section">
                                                    <h6>Email</h6>
                                                    <div>
                                                        <Field
                                                            className="input"
                                                            id="email"
                                                            type="text"
                                                            name="email"
                                                            value={values.email}
                                                            // onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            placeholder="Enter your email"
                                                        />
                                                    </div>
                                                    <div>{touched.email && errors.email ? <div>{errors.email}</div> : null}</div>
                                                </div>
                                                <div className="input-section">
                                                    <h6>Initial Password</h6>
                                                    <div>
                                                        <Field
                                                            className="input"
                                                            id="initialPassword"
                                                            type="text"
                                                            name="initialPassword"
                                                            value={values.initialPassword}
                                                            onChange={handleChange}
                                                            // onBlur={handleBlur}
                                                            placeholder="Enter your initial Password"
                                                        />
                                                    </div>
                                                    <div>
                                                        {touched.initialPassword && errors.initialPassword ? (
                                                            <div>{errors.initialPassword}</div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="input-section">
                                                    <h6>New Password</h6>
                                                    <div>
                                                        <Field
                                                            className="input"
                                                            id="newPassword"
                                                            type="text"
                                                            name="newPassword"
                                                            value={values.newPassword}
                                                            // onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            placeholder="Enter New password"
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
                                                    <div>
                                                        {touched.newPassword && errors.newPassword ? <div>{errors.newPassword}</div> : null}
                                                    </div>
                                                </div>
                                                <div className="input-section">
                                                    <h6>Comfirm Password</h6>
                                                    <div>
                                                        <Field
                                                            className="input"
                                                            id="confirmPassword"
                                                            type="text"
                                                            name="confirmPassword"
                                                            value={values.confirmPassword}
                                                            // onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            placeholder="Confirm Password "
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
                                                    <div>
                                                        {touched.confirmPassword && errors.confirmPassword ? (
                                                            <div>{errors.confirmPassword}</div>
                                                        ) : null}
                                                    </div>
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

export default ChangePassword;
