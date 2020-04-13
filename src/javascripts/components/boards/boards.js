
import boardData from '../../helpers/data/boardData';
import boardMaker from '../boardMaker/boardMaker';
import singleBoard from '../singleBoard/singleBoard';
import utils from '../../helpers/utils';

const buildBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      let domString = '';
      domString += '<h2 class="text-center">Board Area</h2>';
      domString += '<div class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += boardMaker.boardMaker(board);
      });
      domString += '</div>';
      utils.printToDom('print-boards-here', domString);
      $('body').on('click', '.board-card', singleBoard.buildSingleBoard);
      // eslint-disable-next-line no-use-before-define
      // $('body').on('click', '#back-to-boards-button', backToBoards);  // deleted this and moved to pinpasture
      // eslint-disable-next-line no-use-before-define
      $('body').on('click', '.delete-board-button', deleteBoard);
    })
    .catch((err) => console.error('problem with boardMaker inside buildBoards', err));
};


const pinPastureDiv = $('#print-pins-here');
const boardsDiv = $('#print-boards-here');


const backToBoards = () => {
  console.error('hi i am inside your backToBoads function');
  pinPastureDiv.addClass('hide');
  boardsDiv.removeClass('hide');
  buildBoards();
};


const deleteBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error('boardId', boardId);
  console.error('hello from inside your delete board function');
  boardData.deleteBoard(boardId)
    .then(() => {
      buildBoards();
      utils.printToDom('print-boards-here', '');
    })
    .catch((err) => console.error('hmm. could not delete pin', err));
};


export default { buildBoards, backToBoards, deleteBoard };
