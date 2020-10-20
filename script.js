'use strict';

function getDogImage(ber, breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/${ber}`)
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  let images = '';
  for(let message of responseJson.message) { 
    images += `<img src="${message}" class="dog">`;
  }
  //replace the existing image with the new one
  $('.new-img').html(images);
  
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let num = $("#random-num").val();
    let breed = $("#breed-text").val().toLowerCase();
    console.log(breed)
    getDogImage(num, breed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
