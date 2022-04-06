var time = document.querySelector('#time-of-day');
var headerDate = moment().format('dddd, MMMM Do');
var saveButton = document.querySelectorAll('.saveBtn')



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
        // console.log(timeBlockElements)
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
// rechecks time
setInterval(checkTime(), 60);

// gets items to save to localstorage

let allBtns = document.querySelectorAll('.saveBtn')

console.log('allBtns', allBtns.length)
getData()

for (let i=0; allBtns.length > i; ++i) {
    allBtns[i].addEventListener('click', function(event) {
        let inputVal = allBtns[i].previousElementSibling.value;
        console.log('input value:', inputVal)
        let newNum = i + 1;
        localStorage.setItem(`data-id-` + i, inputVal)
    })
}

function getData() {
    for (let i = 1; i < 10; ++i) {

       let saveItem = localStorage.getItem('data-id-'+ i);

       if (saveItem !== null) {
        document.querySelector('input[data-id-' + i + ']').value = saveItem
       }

       console.log('dataVal:', localStorage.getItem('data-id-'+ i))
    }
}