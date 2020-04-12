
import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import pinComponent from '../pins/pin';
import singleBoard from '../singleBoard/singleBoard';


const onlyThisBoardsPinsDiv = $('#print-only-this-boards-pins-here');

const removePin = (e) => {
  const pinId = e.target.closest('.card').id;
  // const removePinBoardId = e.data;
  pinData.deletePin(pinId) // this is the axios call which works in deleting from firebase // removed pinId
    .then(() => {
      console.error('inside your removePin() .then thingy');

      // eslint-disable-next-line no-use-before-define
      // buildPins();
      // singleBoard.showBoardPins(); // error needs click event to work
      utils.printToDom('print-only-this-boards-pins-here', ''); // why did she put an empty domString?
    })
    .catch((err) => console.error('could not delete pin', err));
  const boardIdOnCard = e.target.closest('.board-card').id; // the error happens as soon as it hits this e.

  pinData.getPins()
    .then((pins) => {
      // boardDiv.addClass('hide');
      onlyThisBoardsPinsDiv.removeClass('hide');
      console.error('showBoardPins() inside singleBoard.js just ran');

      let domString = '';
      domString += '<div class="d-flex flex-wrap">';
      pins.forEach((pin) => {
        if (boardIdOnCard === pin.boardId) {
          domString += '<div class="col-3">';
          domString += `<div class="card" id="${pin.id}">`;
          domString += `<img src="${pin.imageUrl}" class="card-img-top" alt="...">`;
          domString += '<div class="card-body">';
          domString += `<h5 class="card-title">This pin has been included on ${pin.boardId}</h5>`;
          domString += '<button class="btn btn-danger delete-pin" id="remove-pin-button">Remove Pin inside showBoardPins</button>';
          domString += '<button class="btn btn-primary" id="back-to-boards-button">Back to Boards</button>';
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';
        }
      });
      // console.log(onlyThisBoardsPins);
      utils.printToDom('print-user-pin-collection-here', domString); // let's change this div location to the other one
    })
    .catch((err) => console.error('catch inside your showBoardPins function', err));
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
