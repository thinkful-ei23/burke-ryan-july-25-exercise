'use strict';


const api = (function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/burke-ryan';
  const getItems = function(callback) {
    callback('api module works!');
  };
  
  return {
    getItems
  };


}());