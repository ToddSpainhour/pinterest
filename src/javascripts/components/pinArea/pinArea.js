
import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import pinComponent from '../pins/pin';
import singleBoard from '../singleBoard/singleBoard';

const removePin = (e) => {
  const pinId = e.target.closest('.card').id;
  // const removePinBoardId = e.data;

  // console.error('the pinId of the item you clicked is ', pinId);
  pinData.deletePin(pinId) // this is the axios call which works in deleting from firebase
    .then(() => {
      console.error('inside your removePin() .then thingy');
      // eslint-disable-next-line no-use-before-define
      // buildPins(); // just added this argument
      // eslint-disable-next-line no-use-before-define
      buildPins();
      // utils.printToDom('print-only-this-boards-pins-here', ''); // why did she put an empty domString?
    })
    .catch((err) => console.error('could not delete pin', err));
};

const buildPins = () => {
  console.error('hello from iside your buildPins function');
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
      $('body').on('click', '#remove-pin-button', removePin);
      $('body').on('click', '#back-to-boards-button', singleBoard.backToBoards);
    })
    .catch((err) => console.error('getPins broke', err));
};


export default {
  buildPins,
  removePin,
};
