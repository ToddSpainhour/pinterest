import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import pinComponent from '../pins/pin';

const buildPins = () => {
  pinData.getPins()
    .then((pins) => {
      let domString = '';
      domString += '<h2 class="text-center">This is the Pin Area</h2>';
      domString += '<div class="d-flex flex-wrap">';
      pins.forEach((pin) => {
        domString += pinComponent.pinMaker(pin);
        // domString += `${arr.boardId}`;
        // domString += `${arr.imageUrl}`;
      });
      domString += '</div>';
      utils.printToDom('print-user-pin-collection-here', domString);
    })
    .catch((err) => console.error('getPins broke', err));
};

export default { buildPins };
