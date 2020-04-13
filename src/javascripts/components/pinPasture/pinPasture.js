import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import pinComponent from '../pins/pin';
import boards from '../boards/boards';

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
      // eslint-disable-next-line no-use-before-define
      $('body').on('click', '#remove-pin-button', deletePin);
      $('body').on('click', '#back-to-boards-button', boards.backToBoards);
    })
    .catch((err) => console.error('get pins broke', err));
};

const deletePin = (e) => {
  const pinId = e.target.closest('.card').id;
  console.error('hello from inside your delete pin function');

  pinData.deletePin(pinId)
    .then(() => {
      buildPins();
      utils.printToDom('print-pins-here', '');
    })
    .catch((err) => console.error('hmm. could not delete pin', err));
};

export default { buildPins };
