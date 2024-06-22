import axios from "axios";

const REST_API_URL = "http://localhost:8080/campaign";

export const listCampaigns = () => axios.get(REST_API_URL);
