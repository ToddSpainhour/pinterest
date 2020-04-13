const boardMaker = (board) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class="card board-card" id=${board.id}>`;
  domString += `<div class="card-header">${board.name}</div>`;
  domString += '<div class="card-body">';
  domString += `<p class="card-text">${board.description}</p>`;
  domString += '<button class="btn btn-primary "id"view-pins-button-on-board">View These Pins</button>';
  domString += '<button class="btn btn-danger delete-board-button" "id"">Delete This Board</button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { boardMaker };
