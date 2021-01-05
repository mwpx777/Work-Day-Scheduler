//let timeRightNow = moment().format('h');

let center= document.getElementById("");
//console.log("time right now is", timeRightNow);
//console.log(typeof(timeRightNow));

const newTask = document.querySelector('newTask');


//console.log(typeof(timeValue))
//var saveTasks = function() {
    // localStorage.setItem("tasks", JSON.stringify(tasks));
    //};
    
    
    $('.btn-primary').on('click', 'span', function(){
        console.log('buttonclicked')
        //var text = $(this).text();
        //var textInput = $('<textarea>')
        // .addClass('form-control')
        //.val(text);
        // $(this).replaceWith(textInput);
        // textInput.trigger('focus');
    });

  
    

    function displayDate() {
       
        let currentDate = moment().format('MMMM Do YYYY, h:mm:ss A');
        document.querySelector(".date").innerHTML = currentDate;
    } 
            //this calls the displayDate function every 1000ms
    setInterval (displayDate, 1000);

    displayDate();
    
    

    function currentTime(){
        let timeValue = moment().set('hour', 9)
        //let timeValue = $(taskEl).find('span').text();
        //console.log("time", timeValue);
        //let timeRightNow = moment().format('h');

        //if (timeRightNow == timeValue){


        if(moment().isAfter(timeValue) + 12){
            //console.log(moment());
            //console.log("true");
            console.log(timeValue);
            
            //$('.centerCol').css("background-color","blue")
            }
        }
    
    currentTime();


    


createNewTask1 = function(){
    console.log('create');
    //$('.centerCol').css("background-color","blue")
    //$(".centerCol").createElement('<input type="text">')
    //const task = document.createElement('input');
    //const taskName = document.createTextNode('here is the text')
    //task.appendChild(taskName);
    var task = document.createElement('input')
    //.addClass('form-control')
    newTask.append(task);
    console.log(task);
    
}

createNewTask2 = function(){
    //console.log('create');
    var task = document.createElement('input')
    //.addClass('form-control')
    newTask.append(task);
    console.log(task);
    
}
createNewTask3 = function(){
    //console.log('create');
    var task = document.createElement('input')
    //.addClass('form-control')
    newTask.append(task);
    console.log(task);
    
}

createNewTask4 = function(){
    //console.log('create');
    var task = document.createElement('input')
    //.addClass('form-control')
    newTask.append(task);
    console.log(task);
    
}
createNewTask5 = function(){
    //console.log('create');
    var task = document.createElement('input')
    //.addClass('form-control')
    newTask.append(task);
    console.log(task);
    
}
createNewTask6 = function(){
    //console.log('create');
    var task = document.createElement('input')
    //.addClass('form-control')
    newTask.append(task);
    console.log(task);
    
}
createNewTask7 = function(){
    //console.log('create');
    var task = document.createElement('input')
    //.addClass('form-control')
    newTask.append(task);
    console.log(task);
    
}
createNewTask8 = function(){
    //console.log('create');
    var task = document.createElement('input')
    //.addClass('form-control')
    newTask.append(task);
    console.log(task);
    
}

createNewTask9 = function(){
    //console.log('create');
    var task = document.createElement('input')
    //.addClass('form-control')
    newTask.append(task);
    console.log(task);
    
}








deleteTask1 = function(){
    var removeTask = document.querySelector('input');
    removeTask.remove()
    console.log('delete');
  
    
}

saveTask1 = function(){
    //this is variable of value that retrieves the user 'input' from input box
    var value = $('input').val();
    //this should set the value of 'var value' to local storage with 'userInput' label
    localStorage.setItem('userInput', value)
    
    console.log(value);

  
    
}

enterText = function(){
    //var userInput = doucment.querySelector('newTask')
    //console.log(userInput);
    console.log("success");
    
}

loadTasks = function(){
    task = localStorage.getItem('userInput');
    //input = 
}

loadTasks();

$('#newBtn1').click(createNewTask1);
$('#newBtn2').click(createNewTask2);
$('#newBtn3').click(createNewTask3);
$('#newBtn4').click(createNewTask4);
$('#newBtn5').click(createNewTask5);
$('#newBtn6').click(createNewTask6);
$('#newBtn7').click(createNewTask7);
$('#newBtn8').click(createNewTask8);
$('#newBtn9').click(createNewTask9);

$('#deleteBtn1').click(deleteTask1);
/*$('#deleteBtn2').click(deleteTask2);
$('#deleteBtn3').click(deleteTask3);
$('#deleteBtn4').click(deleteTask4);
$('#deleteBtn5').click(deleteTask5);
$('#deleteBtn6').click(deleteTask6);
$('#deleteBtn7').click(deleteTask7);
$('#deleteBtn8').click(deleteTask8);
$('#deleteBtn9').click(deleteTask9);*/

$('#saveBtn1').click(saveTask1);
/*$('#saveBtn2').click(saveTask2);
$('#saveBtn3').click(saveTask3);
$('#saveBtn4').click(saveTask4);
$('#saveBtn5').click(saveTask5);
$('#saveBtn6').click(saveTask6);
$('#saveBtn7').click(saveTask7);
$('#saveBtn8').click(saveTask8);
$('#saveBtn9').click(saveTask9);*/


$('newTask').click(enterText);

    
 
