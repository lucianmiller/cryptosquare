$(document).ready(function() {
  $("form#input").submit(function(event){
    event.preventDefault();
    const userMessage = $("#message").val();
    const lowerCaseMessage = userMessage.toLowerCase();
    console.log(userMessage);
    console.log(lowerCaseMessage);
  });
});