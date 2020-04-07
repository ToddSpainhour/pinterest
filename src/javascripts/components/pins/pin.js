const pinMaker = (pin) => {
  let domString = '';
  domString += '<div class="col-3">';
  domString += `<div class="card" id="${pin.id}">`;
  domString += `<img src="${pin.imageUrl}" class="card-img-top" alt="...">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">This pin has been included on ${pin.boardId}</h5>`;
  domString += '<button class="btn btn-danger delete-pin" id="view-pins-button">Remove Pin</button>';
  domString += '<button class="btn btn-primary" id="back-to-boards-button">Back to Boards</button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { pinMaker };
