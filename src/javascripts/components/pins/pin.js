const pinMaker = (pin) => {
  let domString = '';
  domString += '<div class="card" style="width: 18rem;">';
  domString += `<img src="${pin.imageUrl}" class="card-img-top" alt="...">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${pin.boardId}</h5>`;
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { pinMaker };
