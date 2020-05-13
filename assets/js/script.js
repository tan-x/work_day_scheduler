var today = moment().format('ddd, MMMM Do YYYY');
$('#currentDay').text(today);
var hourArray = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
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
    $(`.row[data-timeslot=${[i]}]`).append(textArea);

    // create button in row
    var saveBtn = $('<button>');
    saveBtn.attr('class', 'saveBtn');
    saveBtn.html('<i class="fas fa-save"></i>');
    $(`.row[data-timeslot=${[i]}]`).append(saveBtn);
    
}
