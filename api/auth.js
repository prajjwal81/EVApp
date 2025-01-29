import axios from 'axios';
import {BASE_URL} from './constant';

const REGISTER_URL = BASE_URL + 'auth/register';
const LOGIN_URL = BASE_URL + 'auth/login';

export const register = async phoneNumber => {
  const userData = {phoneNumber};
  try {
    const response = await axios.post(REGISTER_URL, userData);

    return response.data;
  } catch (error) {
    // console.error('Error registering user:', JSON.stringify(error.status));
    throw error;
  }
};

export const login = async phoneNumber => {
  const userData = {phoneNumber};

  try {
    const response = await axios.post(LOGIN_URL, userData);

    return response.data;
  } catch (error) {
    // console.error('Error registering user:', JSON.stringify(error.status));
    throw error;
  }
};
