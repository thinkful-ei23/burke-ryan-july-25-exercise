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

/*api.getItems(function(data) {
  console.log(data);
});*/

//console.log(api.BASE_URL);

api.getItems((items) => {
  const item = items[0];

  api.updateItem(item.id, { name : 'foobar' }, () => {
    console.log('updated!');
  });
});
