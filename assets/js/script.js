var today = moment().format('ddd, MMMM Do YYYY');
$('#currentDay').text(today);
var hourArray = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
var timeText;

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
    row.attr('data-timeslot', `${i}`);
    $('.container').append(row);

    // create hour div in row
    var hour = $('<div>');
    hour.attr('class', 'hour');
    hour.attr('data-timeslot', `${i}`);
    hour.text(hourArray[i]);
    $(`.row[data-timeslot=${[i]}]`).append(hour);

    // create text area in row
    var textArea = $('<textarea>');
    textArea.attr('id', [i]);
    // add text from object if any is in storage
    textArea.text(timeText[i]);
    $(`.row[data-timeslot=${[i]}]`).append(textArea);

    // create button in row
    var saveBtn = $('<button>');
    saveBtn.attr('class', 'saveBtn');
    saveBtn.attr('id', [i]);
    saveBtn.html('<i class="fas fa-save"></i>');
    $(`.row[data-timeslot=${[i]}]`).append(saveBtn);
}

// save input text on click
$('.saveBtn').on('click', function(e) {
    var idIndex = $(this).attr('id');
    // add textarea value to object with id as key
    timeText[idIndex] = $(`textarea#${idIndex}`).val();
    // stringify object and add to localStorage
    localStorage.setItem('timeText', JSON.stringify(timeText));
})