
//Set current date on page load
let currentTime = moment().format("dddd, MMMM Do YYYY");
document.getElementById('header-date').textContent = currentTime;

//keep in military time for simplicity of logic
let timeNow = moment().format('H');

//compare time now to calendar hours, and change text area color depending on time
for (let i = 9; i <= 17; i++) {
  let textInd = i + 10;

  if (parseInt(document.getElementById(`${i}`).id) === timeNow) {
    document.getElementById(`${i}`).innerHTML = `
      <input class="uk-input uk-textarea uk-padding uk-background-primary" id="${textInd}" type="text">
      `
  }
  else if (parseInt(document.getElementById(`${i}`).id) < timeNow)  {
    document.getElementById(`${i}`).innerHTML = `
      <input class="uk-input uk-textarea uk-padding" id="${textInd}" type="text" disabled>
      `;
      //at end of work day, clear all events
    if (parseInt(timeNow) > 18){
      localStorage.clear();
      }
  }
  //at end of work day, clear all events
  
   
  

  //display saved events from local storage, or just leave blank
  document.getElementById(`${i}`).childNodes[1].value = localStorage.getItem(textInd) || '';
}


// Save the typed content as the placeholder text
document.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('uk-button')) {

    let theText = event.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].value;
    event.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].placeholder = theText;

    let index = event.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[1].id;
    localStorage.setItem(index, theText);

    //deslect text areas after clicking save button
    document.getSelection().removeAllRanges();

  }

})


