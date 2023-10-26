import React, { useState } from 'react';
import '../profile/profile.css';
import 'react-phone-input-2/lib/style.css';
import { useSelector } from 'react-redux';
import { editProfile, getInsituteUrl, updateProfileUrl } from 'utils/api';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { Country, State, City } from 'country-state-city';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import nigerianStateLga from 'utils/lga/nigerianStateLga';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import validator from 'validator';
import ErrorMssg from './ErrorMssg';

const CompleteProfileEdit = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({});
    const [updatedStates, setUpdatedState] = useState([]);
    const [updatedCities, setUpdatedCity] = useState([]);
    const [locationValue, setLocationValue] = useState({});
    const [showEdit, setShowEdit] = useState(false);
    const [instituteRegistrationDate, setInstituteRegistrationDate] = useState();
    const [loading, setLoading] = useState(false);

    const [completeValue, setCompleteValue] = useState();

    const { userDetails: selector } = useSelector((state) => state.learnSpace);
    const token = selector?.details?.token;
    const Id = selector?.details?.profile?.data?.[1]?.id;

    const [tempState, setTempState] = useState();

    useEffect(() => {
        setTempState(completeValue);
        console.log('temp state ', tempState);
    }, [completeValue]);

    const { userDetails: select } = useSelector((state) => state.learnSpace);

    const handleCountryChange = (e) => {
        const { name, value } = e.target;
        const countryObj = Country.getCountryByCode(value);
        const state = State.getStatesOfCountry(value);
        setUpdatedState(state);
        setLocationValue((s) => ({ ...s, [name]: countryObj.name }));
    };

    console.log(select);

    console.log('form errors ', Formik.errors);

    const handleStateChange = (e, ng) => {
        // console.log(e.target, 'city-target');
        // console.log(City.getCitiesOfState(...e.target.value))
        const { name, value } = e.target;
        console.log(ng);
        if (ng === 'ng') {
            const city = nigerianStateLga[value];
            // console.log(city, 'city')

            setUpdatedCity(city);
            setLocationValue((s) => ({ ...s, [name]: value }));
        } else {
            const [countryCode, stateCode] = value.split('-');
            const stateObj = State.getStateByCodeAndCountry(stateCode, countryCode);
            const city = City.getCitiesOfState(...e.target.value.split('-'));
            setUpdatedCity(city);
            setLocationValue((s) => ({ ...s, [name]: stateObj.name }));
        }
    };
    console.log('locVal', locationValue);
    const { country, state } = locationValue;

    const handleCityChange = (e, ng) => {
        const { name, value } = e.target;
        if (ng === 'ng') {
            const city = nigerianStateLga[value];

            setLocationValue((s) => ({ ...s, [name]: value }));
        } else {
            const [countryCode, stateCode] = value.split('-');
            const stateObj = State.getStateByCodeAndCountry(stateCode, countryCode);
            const city = City.getCitiesOfState(...e.target.value.split('-'));
            setUpdatedCity(city);
            setLocationValue((s) => ({ ...s, [name]: stateObj.name }));
        }
    };
    const countries = Country.getAllCountries();
    console.log(nigerianStateLga, 'nglga');

    // const [formValues, setFormValues] = useState(initialValues)
    const open = Boolean(anchorEl);
    const [phoneInput, setphoneInput] = React.useState('');
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const submit = (values) => {
        console.log(values);
        const requestBody = {
            instituteEmailAddress: values?.instituteEmailAddress,
            instituteRegistrationDate: instituteRegistrationDate,
            rcNumber: values?.rcNumber,
            instituteTinNumber: values?.instituteTinNumber,
            instituteDescription: values?.instituteDescription,
            institutePhoneNumber: String(values?.institutePhoneNumber),
            instituteLocation: {
                city: locationValue?.city,
                state: locationValue?.state,
                country: locationValue?.country,
                buildingNumber: values?.buildingNumber,
                streetName: values?.streetName
            }
        };

        console.log(requestBody, 'requestBody');

        try {
            const token = select.details.token;
            const id = select?.details?.profile?.data[1]?.id;

            const requestOptions = {
                method: 'PUT',
                body: JSON.stringify(requestBody),
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            };
            fetch(editProfile(id), requestOptions)
                .then((res) => res.json())
                .then((res) => {
                    res.data;
                    console.log(res);
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        submit();
    }, []);

    const fetchProfile = async () => {
        await fetch(getInsituteUrl(Id), {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((res) => {
                setCompleteValue(res?.data);
                console.log('res ', res);
            })
            .catch((err) => {
                throw new err();
            });
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleEdit = () => {
        // navigate('/admin/settings/editprofile');
        setShowEdit(!showEdit);
    };

    return (
        <div className="main-container">
            <div className="hide">You will loose your details if you click here</div>
            {!showEdit ? (
                <div className="sec-div" style={{ lineHeight: '30px', width: '80%', margin: '0 auto' }}>
                    <h4>Company Description</h4>
                    <div className="company-description-p">
                        <p>{completeValue?.instituteDescription}</p>
                    </div>

                    <div className="major">
                        <div className="email-address">
                            <div className="ema">
                                <h4>Company Email Address</h4>
                            </div>
                            <div>
                                <p>{completeValue?.instituteEmailAddress}</p>
                            </div>
                        </div>
                        <div style={{ width: '20%', height: '10px' }} />
                        <div className="locations">
                            <div className="locate">
                                <h4>Location(s)</h4>
                            </div>

                            <p>
                                {completeValue?.instituteLocations[0]?.buildingNumber
                                    ? completeValue?.instituteLocations[0]?.buildingNumber
                                    : '' + ' ' + completeValue?.instituteLocations[0]?.street
                                    ? completeValue?.instituteLocations[0]?.street
                                    : '' + ' ' + completeValue?.instituteLocations[0]?.city
                                    ? completeValue?.instituteLocations[0]?.city
                                    : '' + ' ' + completeValue?.instituteLocations[0]?.state
                                    ? completeValue?.instituteLocations[0]?.state
                                    : '' + ' ' + completeValue?.instituteLocations[0]?.country
                                    ? completeValue?.instituteLocations[0]?.country
                                    : ''}
                            </p>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="major">
                        <div className="email-address">
                            <div className="ema">
                                <h4>Registration Date</h4>
                            </div>
                            <div>
                                <p>{moment(Date(completeValue?.instituteRegistrationDate)).format('YY/MM/DD')}</p>
                            </div>
                        </div>
                        <div style={{ width: '20%', height: '10px' }} />
                        <div className="locations">
                            <div className="locate">
                                <h4>TIN</h4>
                            </div>
                            <div>
                                <p>{completeValue?.instituteTinNumber}</p>
                            </div>
                        </div>
                    </div>
                    <div className="major">
                        <div className="email-address">
                            <div className="ema">
                                <h4>RC Number</h4>
                            </div>
                            <div>
                                <p>{completeValue?.rcnumber}</p>
                            </div>
                        </div>
                        <div style={{ width: '20%', height: '10px' }} />
                        <div className="locations">
                            <div className="locate">
                                <h4>Institution Phone Number</h4>
                            </div>
                            <div>
                                <p>{completeValue?.institutePhoneNumber}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            height: '50px',
                            width: '24vw',
                            justifyContent: 'space-between',
                            display: 'flex',
                            gap: '1rem',
                            marginLeft: '70%'
                        }}
                    >
                        <Button
                            type="submit"
                            sx={{
                                width: '191px',
                                height: '40px',
                                fontWeight: 900,
                                fontFamily: 'IBM Plex Sans',
                                textTransform: 'capitalize',
                                border: 'none',
                                fontSize: '15px',
                                backgroundColor: '#0EAA4F',
                                marginLeft: '3rem',
                                color: '#fff',
                                '&:hover': {
                                    color: '#fff',
                                    backgroundColor: '#0EAA4F'
                                    // outline: '#0EAA4F solid 1px'
                                }
                            }}
                            onClick={handleEdit}
                        >
                            Edit
                        </Button>
                    </div>
                </div>
            ) : (
                <Formik
                    enableReinitialize
                    initialValues={{
                        instituteDescription: tempState.instituteDescription,
                        instituteTinNumber: tempState.instituteTinNumber,
                        rcNumber: tempState.rcnumber,
                        instituteLocation: {
                            city: '',
                            state: '',
                            country: '',
                            buildingNumber: '',
                            streetName: ''
                        },
                        instituteEmailAddress: tempState.instituteEmailAddress,
                        institutePhoneNumber: tempState.institutionPhoneNumber,
                        instituteRegistrationDate: tempState.instituteRegistrationDate
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.instituteEmailAddress) {
                            errors.instituteEmailAddress = 'Email cannot be empty !';
                        } else if (!validator.isEmail(values.instituteEmailAddress)) {
                            errors.email = 'Please enter a valid email !';
                        }
                        if (!values.instituteDescription) {
                            errors.instituteDescription = 'Field Required!';
                        }
                        if (!values.institutePhoneNumber) {
                            errors.institutePhoneNumber = 'Field Required!';
                        }
                        if (!values.instituteTinNumber) {
                            errors.instituteTinNumber = 'Field Required!';
                        }
                        if (!values.rcNumber) {
                            errors.rcNumber = 'Field Required!';
                        }

                        // if (!values.instituteRegistrationDate) {
                        //     errors.instituteRegistrationDate = 'Field Required!';
                        // }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        submit(values);
                        console.log('submit', submit);
                        setSubmitting(true);
                    }}
                >
                    {({ isValid, dirty, values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                        <Form sx={{ display: 'flex', justifyContent: 'center' }} onChange={handleChange}>
                            <div className="company-description">
                                <p>Company Description</p>
                                <textarea
                                    style={{ padding: '10px' }}
                                    className="text-area"
                                    placeholder="Tell us a bit about yourself and what your company does"
                                    name="instituteDescription"
                                    id="instituteDescription"
                                    type="text"
                                    onBlur={handleBlur}
                                    value={values.instituteDescription}
                                    onChange={handleChange}
                                ></textarea>
                                <ErrorMessage name="instituteDescription" component={ErrorMssg} className="error-message" />
                            </div>

                            <div className="company-form">
                                <div className="input-section">
                                    <div className="first-section">
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Company Email Address</p>
                                            <Field
                                                disabled
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="instituteEmailAddress"
                                                type="email"
                                                name="instituteEmailAddress"
                                            />
                                            <ErrorMessage name="instituteEmailAddress" component={ErrorMssg} className="error-message" />
                                        </div>

                                        {country === 'Nigeria' ? (
                                            <div className="company-email">
                                                <p style={{ color: 'black', lineHeight: '0px' }}>State</p>
                                                <select
                                                    name="state"
                                                    style={{
                                                        width: '106.5%',
                                                        height: '2.2rem',
                                                        borderRadius: '5px',
                                                        background: 'white',
                                                        color: 'grey',
                                                        border: '1px solid #d0d5dd',
                                                        paddingLeft: '20px',
                                                        fontSize: '16px'
                                                    }}
                                                    onChange={(e) => handleStateChange(e, 'ng')}
                                                >
                                                    {Object.keys(nigerianStateLga)?.map((state) => {
                                                        return (
                                                            <option placeholder="select state" name={'state'} value={state}>
                                                                {state}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        ) : (
                                            <div className="company-email">
                                                <p style={{ color: 'black', lineHeight: '0px' }}>State</p>
                                                <select
                                                    name="state"
                                                    style={{
                                                        width: '108.5%',
                                                        height: '2.2rem',
                                                        borderRadius: '5px',
                                                        background: 'white',
                                                        color: 'grey',
                                                        border: '1px solid #d0d5dd',
                                                        paddingLeft: '20px',
                                                        fontSize: '16px'
                                                    }}
                                                    onChange={(e) => handleStateChange(e, 'ng')}
                                                >
                                                    {updatedStates?.map(({ name, isoCode, countryCode }) => {
                                                        return (
                                                            <option name={name} value={`${countryCode}-${isoCode}`}>
                                                                {name}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        )}
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Street Name</p>
                                            <Field
                                                className="company-input-field"
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                id="streetName"
                                                type="text"
                                                name="streetName"
                                                placeholder="Borno way"
                                                // value={values.streetName}
                                                // onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>RC Number</p>
                                            <Field
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="rcNumber"
                                                type="number"
                                                name="rcNumber"
                                                onKeyDown={(evt) =>
                                                    (evt.key === 'e' && evt.preventDefault()) || (evt.key === '.' && evt.preventDefault())
                                                }
                                                value={String(values.rcNumber)}
                                            />
                                            <ErrorMessage name="rcNumber" component={ErrorMssg} />
                                        </div>
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Registration Date</p>
                                            <Field
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="instituteRegistrationDate"
                                                type="date"
                                                defaultValue={completeValue.instituteRegistrationDate}
                                                value={instituteRegistrationDate}
                                                onChange={(e) => setInstituteRegistrationDate(e.target.value)}
                                                placeholder="E.g 12/12/12"
                                            />
                                            {/* <ErrorMessage name="instituteRegistrationDate" component={ErrorMssg} /> */}
                                        </div>
                                    </div>
                                    <div className="second-section">
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Country</p>
                                            <select
                                                name="country"
                                                onChange={handleCountryChange}
                                                style={{
                                                    width: '108.5%',
                                                    height: '2.2rem',
                                                    borderRadius: '5px',
                                                    background: 'white',
                                                    color: 'grey',
                                                    border: '1px solid #d0d5dd',
                                                    paddingLeft: '20px',
                                                    fontSize: '16px'
                                                }}
                                            >
                                                {countries.map(({ name, isoCode }) => {
                                                    return (
                                                        <option name={name} value={isoCode}>
                                                            {name}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                        {country === 'Nigeria' ? (
                                            <div className="company-email">
                                                <p style={{ color: 'black', lineHeight: '0px' }}>City</p>
                                                <select
                                                    name="city"
                                                    style={{
                                                        width: '108.5%',
                                                        height: '2.2rem',
                                                        borderRadius: '5px',
                                                        background: 'white',
                                                        color: 'grey',
                                                        border: '1px solid #d0d5dd',
                                                        paddingLeft: '20px',
                                                        fontSize: '16px'
                                                    }}
                                                    onChange={(e) => handleStateChange(e, 'ng')}
                                                >
                                                    {nigerianStateLga[state]?.map((city) => {
                                                        return (
                                                            <option name={'city'} value={city}>
                                                                {' '}
                                                                {city}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        ) : (
                                            <div className="company-email">
                                                <p style={{ color: 'black', lineHeight: '0px' }}>City</p>
                                                <select
                                                    name="city"
                                                    style={{
                                                        width: '108.5%',
                                                        height: '2.2rem',
                                                        borderRadius: '5px',
                                                        background: 'white',
                                                        color: 'grey',
                                                        border: '1px solid #d0d5dd',
                                                        paddingLeft: '20px',
                                                        fontSize: '16px'
                                                    }}
                                                    onChange={handleCityChange}
                                                >
                                                    {updatedCities?.map(({ name }) => {
                                                        return (
                                                            <option name={name} value={name}>
                                                                {name}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        )}

                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Building Number</p>
                                            <Field
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="buildingNumber"
                                                type="text"
                                                name="buildingNumber"
                                                placeholder="No 1"
                                                onKeyDown={(evt) =>
                                                    (evt.key === 'e' && evt.preventDefault()) || (evt.key === '.' && evt.preventDefault())
                                                }
                                                // value={values.buildingNumber}
                                                // onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>TIN</p>
                                            <Field
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="instituteTinNumber"
                                                type="number"
                                                name="instituteTinNumber"
                                                placeholder="xxxxxxxx-xxxx"
                                                // value={String(values.instituteTinNumber)}
                                                // onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <ErrorMessage name="instituteTinNumber" component={ErrorMssg} className="error" />
                                        </div>
                                        <div className="company-email">
                                            <p style={{ color: 'black', lineHeight: '0px' }}>Institute Phone Numbers</p>
                                            <Field
                                                style={{ fontSize: '14px', paddingLeft: '20px' }}
                                                className="company-input-field"
                                                id="institutePhoneNumber"
                                                type="number"
                                                name="institutePhoneNumber"
                                                placeholder=" +234-xx-xx-xxx"
                                                defaultValue={tempState.institutePhoneNumber}
                                                // value={String(values.institutePhoneNumber)}
                                                // onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {/* <ErrorMessage name="institutePhoneNumber" component={ErrorMssg} className="error" /> */}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        height: '50px',
                                        justifyContent: 'space-between',
                                        display: 'flex',
                                        gap: '1rem',
                                        marginLeft: '60%'
                                    }}
                                >
                                    <Button
                                        onClick={submit}
                                        type="submit"
                                        sx={{
                                            width: '191px',
                                            height: '40px',
                                            fontWeight: 900,
                                            fontFamily: 'IBM Plex Sans',
                                            textTransform: 'capitalize',
                                            border: 'none',
                                            fontSize: '15px',
                                            backgroundColor: '#0EAA4F',
                                            position: 'relative',
                                            right: '-185px',
                                            color: '#fff',
                                            '&:hover': {
                                                color: '#fff',
                                                backgroundColor: '#0EAA4F'
                                                // outline: '#0EAA4F solid 1px'
                                            }
                                        }}
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
};

export default CompleteProfileEdit;
