import pinData from '../../helpers/data/pinData';

const buildPins = () => {
  pinData.getPins()
    .then((response) => console.error('get pins worked!', response.data))
    .catch((err) => console.error('get pins broke', err));
};

export default { buildPins };
