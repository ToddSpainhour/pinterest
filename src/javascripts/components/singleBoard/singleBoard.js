const userPinCollectionDiv = $('#print-user-pin-collection-here');
const boardDiv = $('#print-boards-here');


const showBoardPins = () => {
  console.error('this is from within your showBoardPins function in the single boardJS file');
  userPinCollectionDiv.removeClass('hide');
  boardDiv.addClass('hide');
};

const backToBoards = () => {
  console.error('this is from within your backToBoards function in the single boardJS file');
  userPinCollectionDiv.addClass('hide');
  boardDiv.removeClass('hide');
};

export default { showBoardPins, backToBoards };
