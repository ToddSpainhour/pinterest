const boardMaker = (board) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class="card board-card" id=${board.id}>`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${board.name}</h5>`;
  domString += `<p class="card-title">${board.description}</p>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { boardMaker };
