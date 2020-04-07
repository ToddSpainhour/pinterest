import pinData from '../../helpers/data/pinData';
// import utils from '../../helpers/utils';

const userPinCollectionDiv = $('#print-user-pin-collection-here');
const boardDiv = $('#print-boards-here');

// const showOnlyThisBoardsPins = (e) => {
//   const boardIdOnCard = e.target.closest('.card').id;
//   if (boardIdOnCard === pinData.getPins().boardId) {
//     console.error('it worked');
//   } else {
//     console.error('it did not work');
//   }
// };


const showBoardPins = (e) => {
  const boardIdOnCard = e.target.closest('.card').id;
  console.error(`the id of the board you clicked on is "${boardIdOnCard}"`);
  if (boardIdOnCard === pinData.getPins().boardId) {
    console.error('this is inside your if statement');
    userPinCollectionDiv.removeClass('hide');
    boardDiv.addClass('hide');
  } else {
    userPinCollectionDiv.removeClass('hide');
    boardDiv.addClass('hide');
    console.error('this is your else statement inside your showBoardPin function');
    console.error('this the the promise?', pinData.getPins());
  }
};


const backToBoards = () => {
  userPinCollectionDiv.addClass('hide');
  boardDiv.removeClass('hide');
};

export default { backToBoards, showBoardPins };
