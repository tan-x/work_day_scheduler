var today = moment().format('ddd, MMMM Do YYYY');
$('#currentDay').text(today);

// create row in container
var row = $('<div>');
row.attr('class', 'row');
row.attr('data-timeslot', '0');
$('.container').append(row);
// create hour div in row
var hour = $('<div>');
hour.attr('class', 'hour');
hour.text('9AM');
$('.row').append(hour);
// create text area in row
var textArea = $('<textarea>');
$('.row').append(textArea);
// create button in row
var saveBtn = $('<button>');
saveBtn.attr('class', 'saveBtn');
saveBtn.html('<i class="fas fa-save"></i>');
$('.row').append(saveBtn);
