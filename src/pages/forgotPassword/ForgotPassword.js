import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import '../../components/content/Styles.css';
import ContentImage from '../../assets/image/ContentImage.svg';
import FormHeader from '../../components/content/FormHeader';
import { Formik, Field} from 'formik';
import validator from 'validator';
import { TailSpin } from 'react-loader-spinner';
import EyeOpen from '../../assets/icon/eye-open.svg';
import EyeSlash from '../../assets/icon/eye-slash.svg';
import HorizontalLine from '../../assets/image/HorizontalLine.svg';
import GoogleIcon from '../../assets/image/GoogleIcon.svg';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const togglePasswordVisibility = () => {
      setVisible(!visible);
  };
  const [loading, setLoading] = useState(false);
  return (
    <>
        <Navbar/>
        <section className='contentBackground-container'>
    <div className= 'contentBackground-container1'>
        <div className= 'contentBackgroundImage'>
            <img src={ContentImage} alt="" style={{height:'33rem'}}/>
        </div>
    </div>
    <div className= 'contentBackground-container2'>
        <div className="header">
        <div className='welcome-container'>
        
        <h3> Forgot Your Password ?</h3>
        <h6>
            Get ready to enjoy all the features
            and benefits we have to offer. It's quick, easy, and free!
        </h6>
        
    </div>
        </div>
        <div className='form'>
        <Formik
                    initialValues={{
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
                        // submit(values);
                        setSubmitting(false);
                    }}
                >
                    {({ isValid, values, errors, dirty, touched, handleSubmit, handleBlur }) => (
                        <form onSubmit={handleSubmit}>
                            <div >
                                <div>
                                    <div className="input-container">
                                        <div  className="input-section" >
                                            <h6>Email</h6>
                                            <div>
                                                <Field
                                                className="input"
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    value={values.name}
                                                    onBlur={handleBlur}
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            <div>
                                                {touched.email && errors.email ? <div>{errors.email}</div> : null}
                                            </div>
                                        </div>
                                        {/* <div>
                                            <h5 className="forgot-password" onClick={()=>{
                                                navigate('/forgot-password');
                                            }}>Forgot Password ?</h5>
                                        </div> */}
                                        <div>
                                            <button className="form-button"
                                                type="submit"
                                                variant="contained"
                                                disabled={!isValid || !dirty}
                                            >
                                                {loading && <TailSpin color="#FFF" height={20} width={20} />}
                                                Submit
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

export default ForgotPassword;