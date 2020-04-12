import firebase from 'firebase/app';
import 'firebase/auth';

import pinPasture from '../../components/pinPasture/pinPasture';
import boardBuilder from '../../components/boards/boards';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');
const pinPastureDiv = $('#print-pins-here');
const boardsDiv = $('#print-boards-here');
const singleBoardDiv = $('#print-single-board-here');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      pinPastureDiv.removeClass('hide');
      boardsDiv.removeClass('hide');
      singleBoardDiv.removeClass('hide');
      pinPasture.buildPins();
      boardBuilder.buildBoards();
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
      pinPastureDiv.addClass('hide');
      boardsDiv.addClass('hide');
      singleBoardDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
