import React, { useState, useEffect } from 'react';
import '../reviewProduct/ReviewProduct.css';
import ReviewProductImage from './../../../../assets/reviewProductImage.svg';
import { Button } from '@mui/material';
import { generateCreateProducts } from '../../../../utils/api'
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

const ReviewProduct = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('locate', location.state)
    const { id } = useParams()
    console.log("id", id)

    const [formValues, setFormValues] = useState();
    const pdc = location?.state?.productName
    // console.log("pdc ", pdc)
    const { userDetails: select } = useSelector((state) => state.learnSpace)
    const authToken = select?.details?.token

    const name = location.state.productDetails.productName;
    const tenure = location.state.productDetails.productTenure;
    const investment = location.state.productDetails.minimumInvestment;
    const fund = location.state.productDetails.fundSize;
    const interest = location.state.productDetails.interestRate;
    const launch = location.state.productDetails.launchDate;
    const closing = location.state.productDetails.closingDate;
    const comment = location.state.productDetails.description;


    const handleProductSubmit = async (e) => {
        e.preventDefault();
        const productDetails = {
            productName: name,
            productTenure: tenure,
            minimumInvestment: Number(investment),
            fundSize: Number(fund),
            interestRate: Number(interest),
            closingDate: closing,
            description: comment,
            launchDate: launch,
            imageUrl: '6t87t87',

        };

        try {
            const res = await fetch(generateCreateProducts, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`
                },
                body: JSON.stringify(productDetails)
            });
            if (res.ok) {
                const data = await res.json();
                navigate('/add_product-success');
            }
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <section className="section">
            <div className="review-container">
                <div className="review-form-header">
                    <h3>Review Product</h3>
                    <p>Double-check product details and publish</p>
                </div>
                <div className="review-form-details">
                    <div className="review-form-logo">
                        <p style={{ color: 'black' }}>Product Image</p>
                        <img src={ReviewProductImage} alt="empty-logo" />
                    </div>
                    <div className="form-input">
                        <div className="form1">
                            <div className="institute-name">
                                <p>Product Name</p>
                                <h3 style={{ fontWeight: 'bold' }}>{name}</h3>
                            </div>
                            <div className="institute-name">
                                <p>Product Tenure</p>
                                <h3 style={{ fontWeight: 'bold' }}>{tenure}</h3>
                            </div>
                            <div className="institute-name">
                                <p>Minimum Investment</p>
                                <h3 style={{ fontWeight: 'bold' }}>{investment}</h3>
                            </div>
                        </div>
                        <div className="form2">
                            <div className="institute-name">
                                <p>Fund Size</p>
                                <h3 style={{ fontWeight: 'bold' }}>{fund}</h3>
                            </div>
                            <div className="institute-name">
                                <p>Interest Rate</p>
                                <h3 style={{ fontWeight: 'bold' }}>{interest}</h3>
                            </div>
                            <div className="institute-name">
                                <p >Launch Date</p>
                                <h3 style={{ fontWeight: 'bold', lineHeight: '1.5' }}>{launch}</h3>

                            </div>
                        </div>
                        <div className="form3">
                            <div className="institute-name">
                                <p>Closing Date</p>
                                <h3 style={{ fontWeight: 'bold' }}>{closing}</h3>
                            </div>
                        </div>
                        <div className="product-description-section">
                            <div className="product-description">
                                <p>Product Description</p>
                                <p style={{ color: 'black', width: '80%', lineHeight: '1.5rem', fontSize: '16px' }}>
                                    {comment}
                                </p>
                            </div>

                            <div className="contact-button">
                                <div className="reviewer">
                                    <p>Reviewed by: Ejiro Jude</p>
                                </div>
                                <div style={{ gap: '1rem', display: 'flex', flexDirection: 'row' }}>
                                    <Button
                                        onClick={() => {
                                            navigate('/add_product');
                                        }}
                                        sx={{
                                            width: '15rem',
                                            fontWeight: 900,
                                            fontFamily: 'IBM Plex Sans',
                                            textTransform: 'capitalize',
                                            border: 'none',
                                            backgroundColor: '#fff',
                                            color: '#0EAA4F',
                                            outline: '#0EAA4F solid 1px',
                                            '&:hover': {
                                                color: '#0EAA4F',
                                                backgroundColor: '#fff',
                                                outline: '#0EAA4F solid 1px'
                                            }
                                        }}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={handleProductSubmit}
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
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewProduct;
