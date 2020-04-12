import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';

const buildSingleBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  boardData.getBoardById(boardId)
    .then((response) => {
      const singleBoard = response.data;
      console.log(response.data);
      let domString = '';
      domString += '<h2 class="text-center">Featured Board</h2>';
      domString += '<div class="col-12">';
      domString += '<div class="card text-white bg-dark">';
      domString += `<div class="card-header">Board Title: ${singleBoard.name}`;
      domString += '<div class="card-body">';
      domString += '</div>';
      domString += '</div>';

      utils.printToDom('single-board-here', domString);
    })
    .catch((err) => console.error('problem with buildSingleBoard inside singleBoard.js', err));
};

export default { buildSingleBoard };
