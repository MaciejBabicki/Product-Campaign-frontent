import axios from "axios";

const REST_API_URL = "http://localhost:8080/campaigns";

export const listCampaigns = () => axios.get(REST_API_URL);

export const createCampaign = (campaignId) => axios.post(REST_API_URL, campaignId);

export const getCampaign= (campaignId) => axios.get(REST_API_URL + '/' + campaignId);

export const updateCampaign = (campaignId, campaign) => axios.put(REST_API_URL + '/' + campaignId, campaign);

export const deleteCampaign = (campaignId) => axios.delete(REST_API_URL + '/' + campaignId);
