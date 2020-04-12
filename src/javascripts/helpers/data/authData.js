import firebase from 'firebase/app';
import 'firebase/auth';

import pinPasture from '../../components/pinPasture/pinPasture';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');
const pinPastureDiv = $('#print-pins-here');
const boardsDiv = $('#print-boards-here');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      pinPastureDiv.removeClass('hide');
      boardsDiv.removeClass('hide');
      pinPasture.buildPins();
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
      pinPastureDiv.addClass('hide');
      boardsDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
