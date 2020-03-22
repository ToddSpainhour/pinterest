import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const userPinCollectionDiv = $('#print-user-pin-collection-here');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      userPinCollectionDiv.removeClass('hide');
      logoutButton.removeClass('hide');
    } else {
      // person is NOT logged in
      authDiv.removeClass('hide');
      userPinCollectionDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
