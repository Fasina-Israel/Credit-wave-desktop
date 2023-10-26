import React, { useState, useEffect } from 'react';
import '../completeRegistration/CompleteRegistration.css';
import emptyLogo from './../../../../assets/empty-logo.svg';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { generateCreateProducts } from '../../../../utils/api';
import { useSelector } from 'react-redux';

const AddProduct = () => {
    const initialValues = {
        productName: '',
        productTenure: '',
        minimumInvestment: 0,
        fundSize: 0,
        interestRate: 0,
        closingDate: '',
        description: '',
        launchDate: '',
        time: ''
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});

    const { userDetails: select } = useSelector((state) => state.learnSpace);

    const authToken = select?.details?.token;

    const handleProductChange = (e) => {
        const { name, value } = e.target;

        console.log(name, value);
        setFormValues({ ...formValues, [name]: value });
    };
    const productDetails = {
        productName: formValues.productName,
        productTenure: formValues.productTenure,
        minimumInvestment: Number(formValues.minimumInvestment),
        fundSize: Number(formValues.fundSize),
        interestRate: Number(formValues.interestRate),
        closingDate: formValues.closingDate,
        description: formValues.description,
        launchDate: formValues.launchDate + ' ' + formValues.time.replace(':', '-')
    };

    const navigate = useNavigate();
    return (
        <div>
            <div className="" style={{ width: '75.5%', margin: '0 auto', marginTop: '80px' }}>
                <h3>Create Product</h3>
                <p>Provide the following details to add a new product.</p>
            </div>
            <section className="section">
                <div className="complete-container" style={{ height: '75%' }}>
                    <div className="complete-form-details">
                        <div className="complete-form-logo">
                            <p style={{ color: 'black' }}>Add Product Image</p>
                            <img src={emptyLogo} alt="empty-logo" />
                        </div>
                        <div className="complete-form-input">
                            <div className="form1">
                                <div className="institute-name">
                                    <label htmlFor="productName" style={{ color: 'black' }}>
                                        Product Name
                                    </label>
                                    <input
                                        className="input-field"
                                        id="adminFirstName"
                                        type="text"
                                        name="productName"
                                        placeholder="E.g Semicolon"
                                        onChange={handleProductChange}
                                        value={formValues.productName}
                                    />
                                </div>
                                <div className="institute-name">
                                    <label htmlFor="productTenure" style={{ color: 'black' }}>
                                        Product Tenure
                                    </label>
                                    <select
                                        style={{
                                            height: '55.5px',
                                            width: '102%',
                                            outlineStyle: 'none',
                                            fontFamily: 'IBM Plex Sans',
                                            fontSize: '18px',
                                            fontWeight: '900'
                                        }}
                                        className="input-field"
                                        id="adminFirstName"
                                        type="text"
                                        name="productTenure"
                                        onChange={handleProductChange}
                                        value={formValues.productTenure}
                                    >
                                        <option value="" selected>
                                            select tenure
                                        </option>
                                        <option value="ONE_YEAR">one year</option>
                                        <option value="TWO_YEARS">two years</option>
                                        <option value="THREE_YEARS">three years</option>
                                        <option value="FOUR_YEARS">four years</option>
                                        <option value="FIVE_YEARS">five years</option>
                                        <option value="SIX_YEARS">six years</option>
                                        <option value="SEVEN_YEARS">seven years</option>
                                        <option value="EIGHT_YEARS">eight years</option>
                                        <option value="NINE_YEARS">nine years</option>
                                        <option value="TEN_YEARS">ten years</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form2">
                                <div className="institute-name">
                                    <label htmlFor="minimumInvestment" style={{ color: 'black' }}>
                                        Minimum Investment
                                    </label>
                                    <input
                                        className="input-field"
                                        id="adminFirstName"
                                        type="number"
                                        name="minimumInvestment"
                                        placeholder="E.g 4,000,000.00 "
                                        onChange={handleProductChange}
                                        value={formValues.minimumInvestment}
                                    />
                                </div>
                                <div className="institute-name">
                                    <label htmlFor="fundSize" style={{ color: 'black' }}>
                                        Fund Size
                                    </label>
                                    <input
                                        className="input-field"
                                        id="adminFirstName"
                                        type="number"
                                        name="fundSize"
                                        placeholder="Enter amount"
                                        onChange={handleProductChange}
                                        value={formValues.fundSize}
                                    />
                                </div>
                            </div>
                            <div className="form2">
                                <div className="institute-name">
                                    <label htmlFor="interestRate" style={{ color: 'black' }}>
                                        Interest Rate
                                    </label>
                                    <input
                                        className="input-field"
                                        id="adminFirstName"
                                        type="number"
                                        name="interestRate"
                                        placeholder="Enter rate"
                                        onChange={handleProductChange}
                                        value={formValues.interestRate}
                                    />
                                </div>
                                <div className="institute-name">
                                    <label htmlFor="launchDate" style={{ color: 'black' }}>
                                        Launch Date
                                    </label>
                                    <input
                                        className="input-field"
                                        id="adminFirstName"
                                        type="date"
                                        name="launchDate"
                                        placeholder="Select type"
                                        onChange={handleProductChange}
                                        value={formValues.launchDate}
                                    />
                                </div>
                            </div>

                            <div className="form2">
                                <div className="institute-name">
                                    <label htmlFor="time" style={{ color: 'black' }}>
                                        Time
                                    </label>
                                    <input
                                        className="input-field"
                                        id="adminFirstName"
                                        type="time"
                                        name="time"
                                        placeholder="Enter time"
                                        onChange={handleProductChange}
                                        value={formValues.time}
                                    />
                                </div>

                                <div className="institute-name">
                                    <label htmlFor="closingDate" style={{ color: 'black' }}>
                                        Closing Date
                                    </label>
                                    <input
                                        className="input-field"
                                        id="adminFirstName"
                                        type="date"
                                        name="closingDate"
                                        placeholder="Select type"
                                        onChange={handleProductChange}
                                        value={formValues.closingDate}
                                    />
                                </div>
                            </div>
                            <div className="product-description">
                                <div style={{ marginTop: '-1rem', width: '90%' }}>
                                    <label htmlFor="description" style={{ color: 'black' }}>
                                        Product Description
                                    </label>
                                    <textarea
                                        name="description"
                                        className="text-area"
                                        placeholder="About this product"
                                        onChange={handleProductChange}
                                        value={formValues.description}
                                    />
                                </div>
                                <div style={{ marginRight: '3rem', gap: '2rem', display: 'flex', flexDirection: 'row', marginTop: '1rem' }}>
                                    <Button
                                        onClick={() => {
                                            navigate('/learnspace_portfolio_manager/dashboard');
                                        }}
                                        sx={{
                                            width: '15rem',
                                            height: '3rem',
                                            marginLeft: '28rem',
                                            fontWeight: 900,
                                            fontFamily: 'IBM Plex Sans',
                                            textTransform: 'capitalize',
                                            border: 'none',
                                            backgroundColor: '#fff',
                                            color: '#0EAA4F',
                                            outline: '#0EAA4F solid 1px',
                                            '&:hover': {
                                                color: '#0EAA4F',
                                                backgroundColor: '#fff'
                                            }
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            navigate('/review_product', {
                                                state: {
                                                    productDetails
                                                }
                                            });
                                        }}
                                        sx={{
                                            width: '15rem',
                                            fontWeight: 900,
                                            fontFamily: 'IBM Plex Sans',
                                            textTransform: 'capitalize',
                                            border: 'none',
                                            backgroundColor: '#0EAA4F',
                                            color: '#fff',
                                            '&:hover': {
                                                color: '#fff',
                                                backgroundColor: '#0EAA4F',
                                                outline: '#0EAA4F solid 1px'
                                            }
                                        }}
                                    >
                                        Preview
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddProduct;
