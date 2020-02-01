
//Set current date on page load
let currentTime = moment().format("dddd, MMMM Do YYYY");
console.log(currentTime)
document.getElementById('header-date').textContent = currentTime;
let timeNow = moment().format('H');
console.log(timeNow);
// add value to the div box element, iterate over all the div boxes every time interval, and if now is >, <, or = to value, change background color 

console.log(document.getElementsByClassName('parent-elem')[0].childNodes[3].childNodes[1].childNodes[1]);

// Save the typed content as the placeholder text
document.addEventListener('click', (event) => {
  event.preventDefault();

  if(event.target.classList.contains('uk-button')){
  theText.textContent = event.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].value;
  event.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].placeholder = theText;
  document.getSelection().removeAllRanges();
}

})




