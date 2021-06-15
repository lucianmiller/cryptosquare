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
  const squareRoot = Math.sqrt(inputLength);
  const roundedSquareRoot = Math.floor(squareRoot);
  const squareArr = [];
  const charArr = string.split('');
  for (index = 0; index < inputLength; index++){
    const rowArr = [];
    for (index2 = 0; rowArr.length <= roundedSquareRoot; index2++) {
      rowArr.push(charArr[0]);
      charArr.shift();
      if(rowArr.length === roundedSquareRoot){
        squareArr.push(rowArr);
      }
    }
  }
  console.log("Final Arr", squareArr);
  return;
};

//User Logic--------------
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const userMessage = $("#message").val();
    const encodedMessage = (encryptMessage(userMessage));
  });
});