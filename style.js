var time = document.querySelector('#time-of-day');
var headerDate = moment().format('dddd, MMMM Do');




// Adds the day and date to the top of page
$('#currentDay').text(headerDate);




//Change textarea background color based on time
var checkTime = function () {

    //Get Current time
    var currentTime = moment().format('H');

    //get all elements with class "timeColor"
    var timeBlockElements = $(".timeColor");

    //loop through timeColor classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {
        console.log(timeBlockElements)
        //Get element i's ID as a string
        var elementID = timeBlockElements[i].id;

        //get element by ID
        var dayColor = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".present .past .future");
    
        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(dayColor).addClass("past");
        } else if (elementID > currentTime) {
            $(dayColor).addClass("future");
        } else {
            $(dayColor).addClass("present");
        }
    }
}

// checkTime every 5 minutes
setInterval(checkTime(), 60);