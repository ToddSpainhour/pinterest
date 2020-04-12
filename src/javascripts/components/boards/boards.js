import boardData from '../../helpers/data/boardData';
import boardMaker from '../boardMaker/boardMaker';
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
    })
    .catch((err) => console.error('problem with boardMaker inside buildBoards', err));
};

export default { buildBoards };
