
//User Logic--------------
$(document).ready(function() {
  $("form#input").submit(function(event){
    event.preventDefault();
    const userMessage = $("#message").val();
    const lowerCaseMessage = userMessage.toLowerCase();
    const encodedMessage = (encryptMessage(lowerCaseMessage));
    console.log(userMessage);
    console.log(lowerCaseMessage);
  });
});