import boardData from '../../helpers/data/boardData';
import boardComponent from '../board/board';
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
    })
    .catch((err) => console.error('whoops. there is a problem with your getBoards', err));
};

export default { buildBoards };
