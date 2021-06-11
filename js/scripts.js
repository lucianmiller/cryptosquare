//Business Logic----------
function encryptMessage(message) {
  const lowerCaseMessage = message.toLowerCase();
  const cleanedUpString = cleanUpInput(lowerCaseMessage);
  console.log(cleanedUpString);
  createSquare(cleanedUpString);
};
function cleanUpInput(inputString) {
  let cleanString = "";
  for (index = 0; inputString.length > index; index++) {
    let currentCharCode = inputString.charCodeAt(index);
    if (currentCharCode < 123 && currentCharCode > 96) {
      cleanString += inputString.charAt(index);
    };
  };
  return cleanString;
};
function createSquare(string) {
  const inputLength = string.length;
  //next step is to use Math.sqrt(inputLength) ask Dan later
};

//User Logic--------------
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const userMessage = $("#message").val();
    const encodedMessage = (encryptMessage(userMessage));
  });
});