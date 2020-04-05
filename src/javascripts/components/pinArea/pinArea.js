import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import pinComponent from '../pins/pin';

const removePin = (e) => {
  const pinId = e.target.closest('.card').id;
  console.error('pinId', pinId);
  pinData.deletePin(pinId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildPins();
    })
    .catch((err) => console.error('could not delete pin', err));
};

const buildPins = () => {
  pinData.getPins()
    .then((pins) => {
      let domString = '';
      domString += '<h2 class="text-center">This is the Pin Area</h2>';
      domString += '<div class="d-flex flex-wrap">';
      pins.forEach((pin) => {
        domString += pinComponent.pinMaker(pin);
      });
      domString += '</div>';
      utils.printToDom('print-user-pin-collection-here', domString);
      $('body').on('click', '.delete-pin', removePin);
    })
    .catch((err) => console.error('getPins broke', err));
};

export default { buildPins };
