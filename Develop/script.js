

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  
 
  $('.btn-primary').on('click', 'span', function(){
      console.log('buttonclicked')
    //var text = $(this).text();
    //var textInput = $('<textarea>')
   // .addClass('form-control')
    //.val(text);
   // $(this).replaceWith(textInput);
   // textInput.trigger('focus');
  });
  