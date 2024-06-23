import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createCampaign, deleteCampaign, listCampaigns } from '../service/CampaignService';

const ListCampaignComponents = () => {

    const [campaigns, setCampaigns] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        getCampaigns();
    }, [])

    function createCampaign(){
        navigator('/add-campaign')
    }
    
    const getCampaigns = () => {
        listCampaigns().then((response) => {
            setCampaigns(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

        const DeleteCampaign = (campaignId) => {
            deleteCampaign(campaignId).then((response) =>{
                listCampaigns();
            }).catch(error => {
                console.log(error);
            })
    }
  return (
    <div className='container'>
        <h2 className='text-center'>Components of my products</h2>
        <button className='btn btn-primary mb-5'onClick={createCampaign}>Add</button>
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
                    <th>Radius</th>

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
                            <td>{campaign.radius}</td>
                            <td>
                                <Link className="btn btn-info" to={`/edit-campaign/${campaign.id}`}>Update</Link>  
                                <button className="btn btn-danger" onClick={() => deleteCampaign(campaign.id)}
                                    style={{marginLeft:"30px"}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListCampaignComponents