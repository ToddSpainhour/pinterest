import pinData from '../../helpers/data/pinData';
import boardData from '../../helpers/data/boardData';
// import utils from '../../helpers/utils';

const userPinCollectionDiv = $('#print-user-pin-collection-here');
const boardDiv = $('#print-boards-here');

// const showBoardPins = (e) => {
//   const boardIdOnCard = e.target.closest('.board-card').id;
//   console.error(`the id of the board you clicked on is "${boardIdOnCard}"`);
//   console.error('this is your getPinsByBoardId function ', pinData.getPinsbyBoardId());
//   pinData.getPinsbyBoardId(boardIdOnCard)
//     .then((singleBoard) => console.log(singleBoard))
//     .catch((err) => console.error('problem with inside your showBoardPins function in the singleBoard.js file', err));
// };

// this is the function that runs when the 'view pins' button is clicked

const showBoardPins = (e) => {
  const boardIdOnCard = e.target.closest('.board-card').id;
  console.error(`the id of the board you clicked on is "${boardIdOnCard}"`);

  // const x = 2;
  if (boardIdOnCard === pinData.getPins()) {
  // if (x === 2) { //  this line it true and runs the if statement
    console.error('this is inside your if statement');
    userPinCollectionDiv.removeClass('hide');
    boardDiv.addClass('hide');
  } else {
    userPinCollectionDiv.removeClass('hide');
    boardDiv.addClass('hide');
    console.error('boardData.getBoardById returns an object', boardData.getBoardById()); // this one returns an object
    console.error('else statement inside your showBoardPin function');
    console.error('pinData.getPins() returns an array', pinData.getPins()); // this one returns an array of all the pins
  }
};


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
