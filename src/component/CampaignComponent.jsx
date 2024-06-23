import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createCampaign, getCampaign, updateCampaign } from '../service/CampaignService';

const CampaignComponent = () => {
    const [name, setName] = useState('');
    const [keyword, setKeyword] = useState('');
    const [price, setPrice] = useState('');
    const [fund, setFund] = useState('');
    const [status, setStatus] = useState(false);
    const [city, setCity] = useState('');
    const [radius, setRadius] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    function handleName(e) {
        setName(e.target.value);
    }

    function handleKeyword(e) {
        setKeyword(e.target.value);
    }

    function handlePrice(e) {
        setPrice(e.target.value);
    }

    function handleFund(e) {
        setFund(e.target.value);
    }

    function handleStatus(e) {
        setStatus(e.target.value);
    }

    function handleCity(e) {
        setCity(e.target.value);
    }

    function handleRadius(e) {
        setRadius(e.target.value);
    }

    function saveCampaign(e) {
        e.preventDefault();
        const campaign = { name, keyword, price: parseInt(price), fund: parseInt(fund), status, city, radius: parseInt(radius) };
        console.log(campaign);
        if (id) {

            // Update existing campaign
            updateCampaign(id, campaign).then((response) => {
                console.log(response.data);
                navigate('/campaign');
                setName('');
                setKeyword('');
                setPrice();
                setFund();
                setStatus(false);
                setCity('');
                setRadius();
            })
                .catch(error => {
                    console.error(error);
                });
        } else {
            // Create new campaign
            createCampaign(id, campaign).then((response) => {
                console.log(response.data);
                navigate('/campaign');
                setName('');
                setKeyword('');
                setPrice();
                setFund();
                setStatus(false);
                setCity('');
                setRadius();
            })
                .catch(error => {
                    console.error('Error creating campaign', error);
                });
        }
    }
    useEffect(() => {
        if (id) {
            getCampaign(id).then((response) => {
                setName(response.data.name);
                setKeyword(response.data.keyword);
                setPrice(response.data.price);
                setFund(response.data.fund);
                setStatus(response.data.status);
                setCity(response.data.city);
                setRadius(response.data.radius);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [id]);

    const title = () => {
        if (id) {
            return <h2 className='text-center'>Update Campaign</h2>;
        } else {
            return <h2 className='text-center'>Add Campaign</h2>;
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {title()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-5'>
                                <label className='form-label'>Name: </label>
                                <input
                                    type='text'
                                    name='name'
                                    value={name}
                                    className='form-control'
                                    onChange={handleName}
                                />
                            </div>
                            <div className='form-group mb-5'>
                                <label className='form-label'>Keyword: </label>
                                <input
                                    type='text'
                                    placeholder='Enter Campaign Keyword'
                                    name='keyword'
                                    value={keyword}
                                    className='form-control'
                                    onChange={handleKeyword}
                                />
                            </div>
                            <div className='form-group mb-5'>
                                <label className='form-label'>Campaign Price: </label>
                                <input
                                    type='number'
                                    name='price'
                                    value={price}
                                    className='form-control'
                                    onChange={handlePrice}
                                />
                            </div>
                            <div className='form-group mb-5'>
                                <label className='form-label'>Campaign Fund: </label>
                                <input
                                    type='number'
                                    name='fund'
                                    value={fund}
                                    className='form-control'
                                    onChange={handleFund}
                                />
                            </div>
                            <div className='form-group mb-5'>
                                <label className='form-label'>Campaign Status: </label>
                                <input
                                    type='boolean'
                                    name='status'
                                    value={status}
                                    className='form-control'
                                    onChange={handleStatus}
                                />
                            </div>
                            <div className='form-group mb-5'>
                                <label className='form-label'>Campaign City: </label>
                                <input
                                    type='text'
                                    name='city'
                                    value={city}
                                    className='form-control'
                                    onChange={handleCity}
                                />
                            </div>
                            <div className='form-group mb-5'>
                                <label className='form-label'>Campaign Radius: </label>
                                <input
                                    type='number'
                                    name='radius'
                                    value={radius}
                                    className='form-control'
                                    onChange={handleRadius}
                                />
                            </div>
                            <button className='btn btn-success' onClick={saveCampaign}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampaignComponent