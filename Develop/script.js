let newTask = document.querySelector('newTask');
let hourNumber = document.querySelector('.number').innerHTML;
let timeValue = moment().set('hour');
let scheduleHourNumber = parseInt(hourNumber);
console.log("schedule hour number is " , scheduleHourNumber);


//displayDate Function
function displayDate() {
    
    let currentDate = moment().format('MMMM Do YYYY, h:mm:ss A');
    document.querySelector(".date").innerHTML = currentDate;
} 
//this calls the displayDate function every 1000ms
setInterval (displayDate, 1000);

//this will run 'displayDate' when page is loaded
displayDate();


//currentTime Function
function currentTime(){

    //if timeValue is past 12PM, the number will be subtracted by 12
    if(timeValue >= 13){
        timeValue = timeValue - 12
        console.log(timeValue);
    };   

    changeBackground();
}

function changeBackground(){
    //for(var i=0; i> )                              //would I need for loop here?
    if (timeValue == scheduleHourNumber){
        $('.color').css("background-color", "lightred")
        console.log('it matches');                   //this function is not working
    }
    /*else{
        $('.color').css("background-color", "lightgreen")
       console.log("it doesnt match");
    }*/
}
//this will run 'changeBackground every 1 minute
setInterval (changeBackground, 60000);

createNewTask = function(){
    
    //this will create <input> in HTML
    //var task = $('<input>')
    var task = document.createElement('input')   //this only works on 9:00AM
    //.addClass('form-control')
    newTask.append(task);
    console.log(task);
    //console.log('create');
    
}

//deleteTask Function
deleteTask = function(){
    var removeTask = document.querySelector('input');
    removeTask.remove()
    console.log('delete');
  
}

//saveTask Function
saveTask = function(){
    //this is variable of value that retrieves the user 'input' from input box
    var value = $('input').val();
    
    //this should set the value of 'var value' to local storage with 'userInput' label
    localStorage.setItem('userInput', JSON.stringify(value))
    
    console.log(value);
     
}

//enterText Function
enterText = function(){
    //var userInput = doucment.querySelector('newTask')
    //console.log(userInput);
    console.log("success");
    console.log(enterText);
    
}

// save task  when text box is clicked off of
$('newTask').on('blur', 'input',  function(){
    saveTask();
    console.log('saveTask')
});


//loadTasks Function
loadTasks = function(){                         //this function not working
    task = localStorage.getItem('userInput');
    //input = 
}


//this runs the currentTime function when page loads
currentTime();

//this will load tasks from local storage
loadTasks();

//this will run 'enterText' function when 'newTask' is clicked
$('newTask').click(enterText);

//button click events
$('#newBtn1').click(createNewTask);


$('#deleteBtn1').click(deleteTask);

$('#saveBtn1').click(saveTask);



   
 //set background color of future time slots to green
 //set background color of current time slots to red
 
 
//load items into schedule from local storage if page is refreshed
