import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import pinComponent from '../pins/pin';
import singleBoard from '../singleBoard/singleBoard';
import pinForm from '../createPin/createPin';

const removePin = (e) => {
  const pinId = e.target.closest('.card').id;
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
      // $('body').on('click', '.delete-pin', removePin);
      // $('body').on('click', '#back-to-boards-button', singleBoard.backToBoards);
    })
    .catch((err) => console.error('getPins broke', err));
};

const pinClickEvents = () => {
  $('body').on('click', '.delete-pin', removePin);
  $('body').on('click', '#back-to-boards-button', singleBoard.backToBoards);
  $('body').on('click', '#open-add-new-pin-form-button', pinForm.openAddNewPinForm);
};

export default { buildPins, pinClickEvents };
