import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

// this function returns our objects inside an array and assigns an Id to each one
const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`)
    .then((response) => {
      const demPins = response.data;
      const pins = [];
      Object.keys(demPins).forEach((pinId) => {
        demPins[pinId].id = pinId;
        pins.push(demPins[pinId]);
      });
      // console.error();
      resolve(pins);
    })
    .catch((err) => reject(err));
});

const getPinsbyBoardId = (xyz) => axios.get(`${baseUrl}/pins/${xyz}/boardId.json`);

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

const createNewPin = () => axios.post(`${baseUrl}/pins.json`);

export default {
  getPins,
  deletePin,
  getPinsbyBoardId,
  createNewPin,
};
