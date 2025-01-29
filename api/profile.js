import axios from 'axios';
import {BASE_URL} from './constant';
import {getItem} from '../src/utils/asyncStorage';

const PROFILE = BASE_URL + 'profile';
const UPDATE = BASE_URL + 'profile/update';

export const getProfile = async () => {
  try {
    const token = await getItem('token');
    const response = await axios.get(PROFILE, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error Profile:', error);
    throw error;
  }
};

export const setProfile = async (name, email, phoneNumber) => {
  try {
    const token = await getItem('token');
    const userData = {name, email, phoneNumber};
    const response = await axios.put(UPDATE, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error adding vehicle:', error);
    throw error;
  }
};
