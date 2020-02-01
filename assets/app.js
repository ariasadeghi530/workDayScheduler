
//Set current date on page load
let currentTime = moment().format("dddd, MMMM Do YYYY");
document.getElementById('header-date').textContent = currentTime;


let timeNow = moment().format('H');

//compare time now to calendar hours, and change text area color depending on time
for (let i = 9; i <= 17; i++) {

  if (parseInt(document.getElementById(`${i}`).id) === timeNow) {
    document.getElementById(`${i}`).innerHTML = `
      <input class="uk-input uk-textarea uk-padding uk-background-primary" type="text">
      `
  }
  else if (parseInt(document.getElementById(`${i}`).id) < timeNow) {
    console.log('ping')
    document.getElementById(`${i}`).innerHTML = `
      <input class="uk-input uk-textarea uk-padding" type="text" disabled>
      `
  }
}


// Save the typed content as the placeholder text
document.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('uk-button')) {
    theText = event.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].value;
    event.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].placeholder = theText;
    document.getSelection().removeAllRanges();
  }

})


