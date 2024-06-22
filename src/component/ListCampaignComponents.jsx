import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { listCampaigns } from '../service/CampaignService';

const ListCampaignComponents = () => {

    const [campaigns, setCampaigns] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        getAllCampaigns();
    }, [])
    
    const getAllCampaigns = () => {
        listCampaigns().then((response) => {
            setCampaigns(response.data);
        })
    }
  return (
    <div className='container'>
        <h2 className='text-center'>Components of my products</h2>
        <table className='table table stripped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Keyword</th>
                    <th>Price</th>
                    <th>Fund</th>
                    <th>Status</th>
                    <th>City</th>

                </tr>
            </thead>
            <tbody>
                {
                    campaigns.map(campaign =>
                        <tr key = {campaign.id}>
                            <td>{campaign.id}</td>
                            <td>{campaign.name}</td>
                            <td>{campaign.keyword}</td>
                            <td>{campaign.price}</td>
                            <td>{campaign.fund}</td>
                            <td>{campaign.status}</td>
                            <td>{campaign.city}</td>
                        </tr>
                    )
                }
            </tbody>

        </table>
        
    </div>

        
    
  )
}

export default ListCampaignComponents