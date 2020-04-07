import boardData from '../../helpers/data/boardData';
import boardComponent from '../board/board';
import singleBoard from '../singleBoard/singleBoard';
import utils from '../../helpers/utils';

const buildBoards = () => {
  boardData.getBoards()
    .then((boards) => {
      let domString = '';
      domString += '<h2 class="text-center">This is the Board Area</h2>';
      domString += '<div class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += boardComponent.boardMaker(board);
      });
      domString += '</div>';
      utils.printToDom('print-boards-here', domString);
      $('body').on('click', '#view-pins-button', singleBoard.showBoardPins);
    })
    .catch((err) => console.error('whoops. there is a problem with your getBoards inside your boardHouseJS file', err));
};

export default { buildBoards };
