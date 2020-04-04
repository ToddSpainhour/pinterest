import firebase from 'firebase/app';
import 'firebase/auth';

import pinArea from '../../components/pinArea/pinArea';
import boardHouse from '../../components/boardHouse/boardHouse';

const authDiv = $('#auth');
const userPinCollectionDiv = $('#print-user-pin-collection-here');
const boardDiv = $('#print-boards-here');
const logoutButton = $('#navbar-logout-button');
const pinterestGreetingDiv = $('#pinterest-greeting-div');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      pinterestGreetingDiv.addClass('hide');
      authDiv.addClass('hide');
      userPinCollectionDiv.removeClass('hide');
      boardDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      pinArea.buildPins();
      boardHouse.buildBoards();
    } else {
      // person is NOT logged in
      pinterestGreetingDiv.removeClass('hide');
      authDiv.removeClass('hide');
      userPinCollectionDiv.addClass('hide');
      boardDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
