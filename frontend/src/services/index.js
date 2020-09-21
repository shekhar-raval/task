import axios from 'axios';

const API_BASE = process.env.REACT_APP_APIBASE;

export const AddFamilyMember = (data) => {
  return axios
    .post(`${API_BASE}/tree`, data)
    .then(e => e)
    .catch(e => e);
}