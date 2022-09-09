// Current Date time
var currentDateEl = $('#currentDate');
var currentDate;
var currentTime;

// Save to and Retrieve from Local storage

var calEntryEventTime;
var calEntryEventTxt;
var timeArr = [8,9,10,11,12,13,14,15,16,17]

// save button
var saveBtn = $('.saveBtn');

// determine the colour state
var calTimeBlock;
var timerInterval;
var calTimeblockID = $("textarea[id*='timeblock']");

//Calls the functions to render the date and events to the DOM & update the colours

function init() {
    currentMomentDate();
    renderEvents();
    setBGColors();
};

// Retrieves the current date and renders it in the Jumbotrom Header 
function currentMomentDate() {
    currentDate = moment().format( 'LLLL, DDD');
    currentDateEl.text(currentDate);
};

// Renders events that are pulled from local storage and places them in the DOM 
function renderEvents() {
    for (let i = 0; i < timeArr.length; i++){
        $('[id^=timeblock-]').each(function (i, v){
            $(v).val(localStorage.getItem(timeArr[i]));
        })
    }
};

// Triggers the click handler for the save buttons
saveBtn.on('click', saveButtonClickHandler);

// When Save Button Clicked, the corresponding date and time values
function saveButtonClickHandler(event) {
    // Keeps form from sending
    event.preventDefault();
    // Sets value to the time associated with the clicked save button
    calEntryEventTime =  $(this).attr('id').split('-')[1];
    //Sets value to the input of what the user has typed
    calEntryEventTxt = $(this).siblings('textarea[name^="timeblock"]').val().trim();
    // Calls function to store in local storage
    StoreEvents();
};

// Stores time and text Values to the local Storage where (time = key) and (user's input text = value)
function StoreEvents() {
    localStorage.setItem(calEntryEventTime, calEntryEventTxt);
};
