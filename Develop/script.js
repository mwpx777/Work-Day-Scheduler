// this will get the current hour from moment()
let timeValue = moment().format('HH');
// this will add 00 to end of timeValue
timeValue += "00"
// this will parse timeValue into a number
timeValue = parseInt(timeValue);
// this is the default saved info in local storage if none is saved
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
//this will make 'data' either equal the loadData or dataDefault 
let data = loadData() || dataDefault


//displayDate Function for clock in header
function displayDate() {
    //this takes current date from moment()
    let currentDate = moment().format('MMMM Do YYYY, h:mm:ss A');
    // this displays currentDate on page in .date area
    document.querySelector(".date").innerHTML = currentDate;
}
//this calls the displayDate function every 1000ms
setInterval(displayDate, 1000);


function updateRows() {
    //this gives rows variable to all 'row' classes
    let rows = document.querySelectorAll(".row")

    for (var i = 0; i < rows.length; i++) {
        let row = rows[i]
        //console.log(row.dataset.time)
        let rowTime = parseInt(row.dataset.time)

        if (timeValue < rowTime) {
            $(row).find(".color").css("background-color", "#77dd77")
            // console.log('it matches');
        } else if (timeValue == rowTime) {
            $(row).find(".color").css("background-color", "#ff6961")
        }
        let text = data[i].text
        $(row).find('textarea').val(text)
    }

}

function updateData() {
    console.log('clicked');
    let rows = document.querySelectorAll(".row")

    for (var i = 0; i < rows.length; i++) {
        let row = rows[i]

        let text = $(row).find('textarea').val()

        data[i].text = text
    }
    saveData();
}

//this will run updateData every 1 minute
setInterval(updateData, 60000);



//saveData Function
function saveData() {
    console.log('button clicked');
    //this will set the value of data to local storage with 'data' label
    localStorage.setItem('data', JSON.stringify(data))
}


//loadTasks Function
function loadData() {
    rawJson = localStorage.getItem('data');
    return JSON.parse(rawJson)
}

//button click events
$('.saveBtn').click(updateData);


//this will run 'displayDate' when page is loaded
displayDate();

loadData();

updateRows();


