import axios from 'axios';
import {BASE_URL} from './constant';
import {getItem} from '../src/utils/asyncStorage';

const ADD_VEHICLE = BASE_URL + 'vehicle/add';
const GET_VEHICLE = BASE_URL + 'vehicle/';

export const addVehicle = async (
  model,
  manufactureNumber,
  vehicleRegistrationNumber,
) => {
  const vehicleData = {
    model,
    manufacture: manufactureNumber,
    vehicleRegistrationNumber: vehicleRegistrationNumber,
  };

  try {
    const token = await getItem('token');
    console.log(token);
    const response = await axios.post(ADD_VEHICLE, vehicleData, {
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

export const getVehicle = async () => {
  try {
    const token = await getItem('token');
    const response = await axios.get(GET_VEHICLE, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {}
};
