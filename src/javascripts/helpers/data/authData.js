import firebase from 'firebase/app';
import 'firebase/auth';

import pinPasture from '../../components/pinPasture/pinPasture';

const authDiv = $('#auth');
const pinPastureDiv = $('#print-pins-here');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      pinPastureDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      pinPasture.buildPins();
    } else {
      authDiv.removeClass('hide');
      pinPastureDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
