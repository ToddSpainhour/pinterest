
import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

const userPinCollectionDiv = $('#print-user-pin-collection-here');
const boardDiv = $('#print-boards-here');
const onlyThisBoardsPinsDiv = $('#print-only-this-boards-pins-here');

const showBoardPins = (e) => {
  const boardIdOnCard = e.target.closest('.board-card').id; // the error happens as soon as it hits this e.

  pinData.getPins()
    .then((pins) => {
      boardDiv.addClass('hide');
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
      utils.printToDom('print-only-this-boards-pins-here', domString);
    })
    .catch((err) => console.error('catch inside your showBoardPins function', err));
};


const backToBoards = () => {
  userPinCollectionDiv.addClass('hide');
  boardDiv.removeClass('hide');
  onlyThisBoardsPinsDiv.addClass('hide');
};

export default { backToBoards, showBoardPins };
