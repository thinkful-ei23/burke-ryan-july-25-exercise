'use strict';
/* global $ */

const api = (function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/burke-ryan';

  const getItems = function(callback) {
    //callback('api module works!');
    $.getJSON(`${BASE_URL}/items`, callback); 
  };

  const createItem = function(name, callback) {
    const newItem = JSON.stringify({name: name});
  
    $.ajax( {
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType : 'application/json',
      data : newItem,
      success: callback
    } , callback);
  };

  const updateItem = function(id, updateData, callback){
  	$.ajax({
		url: `${BASE_URL}/items/${id}`,
		method: 'POST',
		contentType: 'application/json',
		data: updateData,
		success: callback
  	}, callback);
  };
  
  return {
    getItems,
    createItem,
    updateItem
  };


}());
