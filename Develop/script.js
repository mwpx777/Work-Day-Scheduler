let newTask = document.querySelector('newTask');
let hourNumber = document.querySelector('.number').innerHTML;
let timeValue = moment().format('HH');
timeValue += "00"
timeValue = parseInt(timeValue);
timeValue = 1200 //remove later

let dataDefault = [
    //object literal
    //array 0
    {
        time: 900,
        text: ""

    },
    {
        time: 1000,
        text: ""

    },
    {
        time: 1100,
        text: ""

    },
    {
        time: 1200,
        text: ""

    },
    {
        time: 1300,
        text: ""

    },
    {
        time: 1400,
        text: ""

    },
    {
        time: 1500,
        text: ""

    },

    {
        time: 1600,
        text: ""

    },
    {
        time: 1700,
        text: ""

    },
]
let data = loadData() || dataDefault


//displayDate Function
function displayDate() {

    let currentDate = moment().format('MMMM Do YYYY, h:mm:ss A');
    document.querySelector(".date").innerHTML = currentDate;
}
//this calls the displayDate function every 1000ms
setInterval(displayDate, 1000);



//currentTime Function
function currentTime() {

    //if timeValue is past 12PM, the number will be subtracted by 12
    /* if(timeValue >= 13){
         timeValue = timeValue - 12
         console.log(timeValue);
     };  */

    updateRows();
}
//this will change the background color of tasks based on current time

function updateRows() {

    let rows = document.querySelectorAll(".row")

    for (var i = 0; i < rows.length; i++) {
        let row = rows[i]
        console.log(row.dataset.time)
        let rowTime = parseInt(row.dataset.time)

        if (timeValue > rowTime) {
            $(row).find(".color").css("background-color", "green")
            console.log('it matches');
        } else if (timeValue == rowTime) {
            $(row).find(".color").css("background-color", "red")
        }
        let text = data[i].text
        $(row).find('textarea').val(text)
    }


    /*else{
        $('.color').css("background-color", "lightgreen")
       console.log("it doesnt match");
    }*/
}

function updateData() {
    let rows = document.querySelectorAll(".row")

    for (var i = 0; i < rows.length; i++) {
        let row = rows[i]

        let text = $(row).find('textarea').val()


        data[i].text = text
        
    }

}
//this will run 'updateRows every 1 minute
//setInterval(updateRows, 60000);

//this will create a new task
createNewTask = function () {

    //this will create <input> in HTML
    //var task = $('<input>')
    var task = document.createElement('input')   //this only works on 9:00AM
    //.addClass('form-control')
    newTask.append(task);
    console.log(task);
    //console.log('create');

}

//deleteTask Function
deleteTask = function () {
    var removeTask = document.querySelector('input');
    removeTask.remove()
    console.log('delete');

}

//saveTask Function
function saveData() {
    //this is variable of value that retrieves the user 'input' from input box
    //var value = $('input').val();

    //this should set the value of 'var value' to local storage with 'userInput' label
    localStorage.setItem('data', JSON.stringify(data))



}

//enterText Function
enterText = function () {
    //var userInput = doucment.querySelector('newTask')
    //console.log(userInput);
    console.log("success");
    console.log(enterText);

}

// save task when text box is clicked off of
$('textarea').on('blur', 'input', function () {
    saveData();

});


//loadTasks Function
function loadData() {
    rawJson = localStorage.getItem('data');
    return JSON.parse(rawJson)
}


//this runs the currentTime function when page loads
currentTime();

//this will load tasks from local storage
//loadTasks();

//this will run 'enterText' function when 'newTask' is clicked
$('newTask').click(enterText);

//button click events
$('#clickHere').click(createNewTask);

$('#deleteBtn1').click(deleteTask);

$('#saveBtn1').click(saveData);

//this will run 'displayDate' when page is loaded
displayDate();



//set background color of future time slots to green
 //set background color of current time slots to red


//load items into schedule from local storage if page is refreshed
