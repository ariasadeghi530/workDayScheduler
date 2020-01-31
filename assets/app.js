
//Set current date on page load
let currentTime = moment().format("dddd, MMMM Do YYYY");
console.log(currentTime)
document.getElementById('header-date').textContent = currentTime;

// Event 
document.addEventListener('click', (event) => {
  event.preventDefault();
  if(event.target.classList.contains('uk-button')){
  let theText = document.createElement('p');
  theText.classList ='uk-margin-left uk-margin-top';
  theText.textContent = event.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].value;
  console.log(document.getElementsByClassName('uk-input uk-form-blank uk-padding').value);
  console.log(event.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1]);
  event.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].prepend(theText);
  //document.getElementsByClassName('uk-input uk-form-blank uk-padding').value = '';
}
})


