import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import pinComponent from '../pins/pin';
import singleBoard from '../singleBoard/singleBoard';
import pinForm from '../createPin/createPin';

const createNewPinFormDiv = $('#print-create-new-pin-form-here');


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


const createNewPin = (e) => {
  e.preventDefault();
  console.error('you just fired off the createNewPin function which will eventually send it to firebase');
  // add class hide to the form div
  createNewPinFormDiv.addClass('hide');
};


const pinClickEvents = () => {
  $('body').on('click', '.delete-pin', removePin);
  $('body').on('click', '#back-to-boards-button', singleBoard.backToBoards);
  $('body').on('click', '#open-add-new-pin-form-button', pinForm.openAddNewPinForm);
  $('body').on('click', '#submit-new-pin-form-button', createNewPin);
};

export default { buildPins, createNewPin, pinClickEvents };
