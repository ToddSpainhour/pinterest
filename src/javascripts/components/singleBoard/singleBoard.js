// import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';
import pinBuilder from '../pins/pin';
import utils from '../../helpers/utils';

const buildSingleBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  $('#print-boards-here').addClass('hide');
  // $('#print-single-board-here').removeClass('hide');
  $('#print-pins-here').removeClass('hide');

  pinData.getPins(boardId)
    .then((pins) => {
      // const singleBoard = pins.data;
      let domString = '';
      domString += '<div class="d-flex flex-wrap">';
      pins.forEach((pin) => {
        domString += pinBuilder.pinMaker(pin);
      });

      domString += '</div>';
      utils.printToDom('single-board-here', domString);
      // eslint-disable-next-line no-use-before-define
    })
    .catch((err) => console.error('problem with buildSingleBoard inside singleBoard.js', err));
};

export default { buildSingleBoard };
