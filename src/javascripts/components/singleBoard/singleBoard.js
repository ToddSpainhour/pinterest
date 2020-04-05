
import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';

const buildBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  boardData.getBoardById(boardId)
    .then((response) => {
      const singleBoard = response.data;
      let domString = '';
      domString += '<h2 class="text-center>Featured Board</h2>';
      domString += '<div class="col-12">';
      domString += '<div class="card text-white bg-dark mb-3">';
      domString += `<div class="card-header">${singleBoard.name}</div>`;
      domString += `<div class="card-text">${singleBoard.description}</div>`;
      domString += '<div class="card-body">';
      domString += '<p class="card-text">add content here</p>';
      domString += '</div>';
      domString += '</div>';

      utils.printToDom('print-single-board-here', domString);
    })
    .catch((err) => console.log('there is a problem with single board', err));
};

export default { buildBoard };
