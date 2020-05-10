import utils from '../../helpers/utils';

const createNewPinFormDiv = $('#print-create-new-pin-form-here');


const openAddNewPinForm = () => {
  createNewPinFormDiv.removeClass('hide');
  let domString = '';
  domString += '<form>';
  domString += '<div class="form-group">';
  domString += '<label for="user-entered-image-url">Add a Link to a cool picture</label>';
  domString += '<input type="text" class="form-control" id="user-entered-image-url" aria-describedby="emailHelp" placeholder="add your link here">';
  domString += '<button type="submit" class="btn btn-primary" id="submit-new-pin-form-button">Add Your Image to this Board</button>';
  domString += '</form>';

  utils.printToDom('print-create-new-pin-form-here', domString);
};

export default { openAddNewPinForm };
