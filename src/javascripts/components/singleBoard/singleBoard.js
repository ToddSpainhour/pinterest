import pinData from '../../helpers/data/pinData';
// import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';
import pinMaker from '../pins/pin';

const userPinCollectionDiv = $('#print-user-pin-collection-here');
const boardDiv = $('#print-boards-here');
const onlyThisBoardsPinsDiv = $('#print-only-this-boards-pins-here');
// const thisBoardsPinsDiv = $('#print-only-this-boards-pins-here');

const showBoardPins = (e) => {
  const boardIdOnCard = e.target.closest('.board-card').id;
  // const onlyThisBoardsPins = [];

  pinData.getPins()
    .then((pins) => {
      boardDiv.addClass('hide');
      onlyThisBoardsPinsDiv.removeClass('hide');

      let domString = '';
      domString += '<button class="btn btn-primary" id="back-to-boards-button">Back to Boards</button>';
      domString += '<button class="btn btn-success" id="open-add-new-pin-form-button">Add New Pin</button>';
      domString += '<div class="d-flex flex-wrap">';
      pins.forEach((pin) => {
        if (boardIdOnCard === pin.boardId) {
          pinMaker.pinMaker(pin);
          // console.error('inside your showBoardPins click event');
          domString += '<div class="col-3">';
          domString += `<div class="card" id="${pin.id}">`;
          domString += `<img src="${pin.imageUrl}" class="card-img-top" alt="...">`;
          domString += '<div class="card-body">';
          domString += `<h5 class="card-title">This pin has been included on ${pin.boardId}</h5>`;
          domString += '<button class="btn btn-danger delete-pin" id="view-pins-button"><i class="fas fa-trash"></i></button>';
          // domString += '<button class="btn btn-primary" id="back-to-boards-button">Back to Boards</button>';
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';
        } else {
          // console.error('inside the else statement inside showBoardPins');
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


// const showOnlyThisBoardsPins = (e) => {
//   const boardIdOnCard = e.target.closest('.card').id;
//   if (boardIdOnCard === pinData.getPins().boardId) {
//     console.error('it worked');
//   } else {
//     console.error('it did not work');
//   }
// };


// this is the function that runs when the 'view pins' button is clicked

// const showBoardPins = (e) => {
//   const boardIdOnCard = e.target.closest('.board-card').id;
//   const boardIdAttachedToPinData = pinData.getPins();

//   console.error(`the id of the board you clicked on is "${boardIdOnCard}"`);
//   console.error('boardIdAttachedToPinData returns...', boardIdAttachedToPinData);


//   if (boardIdOnCard === boardIdAttachedToPinData.boardId) {
//     console.error('this is inside your if statement');
//     userPinCollectionDiv.removeClass('hide');
//     boardDiv.addClass('hide');
//     pinData.getPins();
//   } else {
//     console.error('this is inside your else statement');
//     userPinCollectionDiv.removeClass('hide');
//     boardDiv.addClass('hide');
//   }
// };
