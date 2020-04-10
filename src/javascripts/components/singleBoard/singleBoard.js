import pinData from '../../helpers/data/pinData';
// import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';

const userPinCollectionDiv = $('#print-user-pin-collection-here');
const boardDiv = $('#print-boards-here');


const showBoardPins = (e) => {
  const boardIdOnCard = e.target.closest('.board-card').id;
  // console.error('the id of the board you clicked on: ', boardIdOnCard);
  pinData.getPins()
    .then((pins) => {
      let domString = '';
      const onlyThisBoardsPins = [];

      pins.forEach((pin) => {
        if (boardIdOnCard === pin.boardId) {
          onlyThisBoardsPins.push(pin);
          console.log(onlyThisBoardsPins);
          console.log(pin.boardId);
          domString += '<h2>hello it worked</h2>';
          userPinCollectionDiv.removeClass('hide');
          boardDiv.addClass('hide');
          console.error('inside the if statement');
          // utils.printToDom('print-single-board-here', domString);
        } else {
          userPinCollectionDiv.removeClass('hide');
          boardDiv.addClass('hide');
          console.error('inside the else statement');
          // utils.printToDom('print-single-board-here', domString);
        }
      });
      utils.printToDom('print-single-board-here', domString);
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
