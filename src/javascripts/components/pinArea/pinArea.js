import pinData from '../../helpers/data/pinData';

const buildPins = () => {
  pinData.getPins()
    .then((response) => console.error('getPins worked', response))
    .catch((err) => console.error('getPins broke', err));
};

export default { buildPins };
