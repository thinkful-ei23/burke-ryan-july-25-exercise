/* global shoppingList, store $ Item api*/
'use strict';
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});



$.getJSON('https://thinkful-list-api.herokuapp.com/ei-student/items', (response) => {
  //console.log('api response:', response);
});


