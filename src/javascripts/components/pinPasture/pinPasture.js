import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import pinComponent from '../pins/pin';

const buildPins = () => {
  pinData.getPins()
    .then((pins) => {
      let domString = '';
      domString += '<h2 class="text-center">Pin Pasture</h2>';
      domString += '<div class="d-flex flex-wrap">';
      pins.forEach((pin) => {
        domString += pinComponent.pinMaker(pin);
      });
      domString += '</div>';
      utils.printToDom('print-pins-here', domString);
    })
    .catch((err) => console.error('get pins broke', err));
};

export default { buildPins };
