//let timeRightNow = moment().format('h');

const newTask = document.querySelector('newTask');


//console.log(typeof(timeValue))
//var saveTasks = function() {
    // localStorage.setItem("tasks", JSON.stringify(tasks));
    //};
    
  

  
    
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
let timeValue = moment().set('hour')
//let timeValue = $(taskEl).find('span').text();
//console.log("time", timeValue);
//let timeRightNow = moment().format('h');

//if (timeRightNow == timeValue){

                                                //this area not working
if(moment().isBefore(timeValue)){
   
    console.log(timeValue);
    
    $('.centerCol').css("background-color","grey")
    }

    else if(moment() == timeValue) {
    //$('.centerCol').css("background-color","red")

    }
}

//this runs the currentTime function when page loads
currentTime();
   
createNewTask = function(){
    var task = document.createElement('input')
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
    localStorage.setItem('userInput', value)
    
    console.log(value);
     
}

//enterText Function
enterText = function(){
    //var userInput = doucment.querySelector('newTask')
    //console.log(userInput);
    console.log("success");
    console.log(enterText);
    
}

//task is clicked off of
$('newTask').on('blur', 'input',  function(){
    saveTask1();
    console.log('saveTask')
});


//loadTasks Function
loadTasks = function(){
    task = localStorage.getItem('userInput');
    //input = 
}

//this will load tasks from local storage
loadTasks();

//this will run 'enterText' function when 'newTask' is clicked
$('newTask').click(enterText);

//button click events
$('#newBtn1').click(createNewTask);

$('#deleteBtn1').click(deleteTask);

$('#saveBtn1').click(saveTask);



  //compare current time to time on schedule  
 //set background color of past time slots to grey
 //set background color of current time slots to red
 
 
//load items into schedule from local storage if page is refreshed
//refresh curentTime every 1 minute