import pinData from '../../helpers/data/pinData';
// import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';
// import pinMaker from '../pins/pin';

const userPinCollectionDiv = $('#print-user-pin-collection-here');
const boardDiv = $('#print-boards-here');
// const thisBoardsPinsDiv = $('#print-only-this-boards-pins-here');

const showBoardPins = (e) => {
  const boardIdOnCard = e.target.closest('.board-card').id;
  // const onlyThisBoardsPins = [];

  pinData.getPins()
    .then((pins) => {
      let domString = '';
      console.log(boardIdOnCard);
      console.log(pins.boardId);
      console.log(pinData.getPins());
      pins.forEach((pin) => {
        if (boardIdOnCard === pin.boardId) {
          // let domString = '';
          domString += '<div class="col-3">';
          domString += `<div class="card" id="${pin.id}">`;
          domString += `<img src="${pin.imageUrl}" class="card-img-top" alt="...">`;
          domString += '<div class="card-body">';
          domString += `<h5 class="card-title">This pin has been included on ${pin.boardId}</h5>`;
          domString += '<button class="btn btn-danger delete-pin" id="view-pins-button">Remove Pin</button>';
          domString += '<button class="btn btn-primary" id="back-to-boards-button">Back to Boards</button>';
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';
        } else {
          console.error('inside the else statement inside showBoardPins');
        }
      });
      // console.log(onlyThisBoardsPins);
      utils.printToDom('print-only-this-boards-pins-here', domString);
    })
    .catch((err) => console.error('catch inside your showBoardPins function', err));
};


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


const backToBoards = () => {
  userPinCollectionDiv.addClass('hide');
  boardDiv.removeClass('hide');
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
