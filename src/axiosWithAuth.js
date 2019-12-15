import axios from 'axios';


export const axiosWithAuth = () => {


  return axios.create({
    baseURL: 'https://sessions-test.herokuapp.com/api',
    headers: {
      'Content-Type': 'application/json',
      // 'withCredentials': true,
    }
  });
};

