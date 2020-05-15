var today = moment().format('ddd, MMMM Do YYYY');
var hourTime = moment().format('H');
$('#currentDay').text(today);
var hourArray = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
var timeText;
var hourId = 9;

// look for saved text in localStorage, fill timeText object if available
if (localStorage.getItem('timeText') === null){
    timeText = {};
    console.log('nothing in storage');
} else {
    timeText = JSON.parse(localStorage.getItem('timeText'));
}


for (i = 0; i < hourArray.length; i++) {
    // create row in container
    var row = $('<div>');
    row.attr('class', 'row');
    row.attr('data-timeslot', [i]);
    $('.container').append(row);

    var rowAppend = `.row[data-timeslot=${[i]}]`;
    // create hour div in row0
    var hour = $('<div>');
    hour.attr('class', 'hour');
    hour.attr('data-timeslot', [i]);
    hour.text(hourArray[i]);
    $(rowAppend).append(hour);

    // create text area in row
    var textArea = $('<textarea>');

    textArea.attr('id', hourId);
    // add text from object if any is in storage
    textArea.text(timeText[hourId++]);
    var currentTime = parseInt(textArea.attr('id'));
    if (currentTime < hourTime) {
        textArea.attr('class', 'past');
    } else if (currentTime > hourTime) {
        textArea.attr('class', 'future');
    } else {
        textArea.attr('class', 'present');
    }
    $(rowAppend).append(textArea);

    // create button in row
    var saveBtn = $('<button>');
    saveBtn.attr('class', 'saveBtn');
    saveBtn.attr('id', [i]);
    saveBtn.html('<i class="fas fa-save"></i>');
    $(rowAppend).append(saveBtn);
}

// save input text on click
$('.saveBtn').on('click', function() {
    var idIndex = parseInt($(this).attr('id')) + 9;
    // add textarea value to object with id as key
    timeText[idIndex] = $(`textarea#${idIndex}`).val();
    // stringify object and add to localStorage
    localStorage.setItem('timeText', JSON.stringify(timeText));
})