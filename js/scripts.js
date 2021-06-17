//Business Logic----------
function finalEncryptedMessage(message) {
  const lowerCaseMessage = message.toLowerCase();
  const cleanedUpString = cleanUpInput(lowerCaseMessage);
  const cryptoSquare = createSquare(cleanedUpString);
  const encryptedMessage = encryptMessage(cryptoSquare);
  return encryptedMessage;
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
  let workingString = string;
  const inputLength = string.length;
  const squareRoot = Math.sqrt(inputLength);
  const roundedSquareRoot = Math.floor(squareRoot);
  const squareArr = [];
  for (index = 0; workingString.length != 0; index++) {
    const rowArr = workingString.split('', roundedSquareRoot);
    squareArr.push(rowArr);
    workingString = workingString.slice(roundedSquareRoot);
  };
  return squareArr;
};

function encryptMessage(inputArr) {
  let outputArr = [];
  let fiveCharString = '';
  for (index = 0; index <= inputArr.length; index++) {
    inputArr.forEach(rowArray => {
      let character = rowArray[index];
      if (fiveCharString.length == 5) {
        outputArr.push(fiveCharString);
        fiveCharString = '';
      };
      if (rowArray[index] != undefined) {
        fiveCharString += rowArray[index];
      } else if (rowArray[index] == undefined) {
        outputArr.push(fiveCharString);
        index = inputArr.length;
        return;
      };
    });
  };
  const finalMessage = outputArr.join(' ');
  return finalMessage;
};

//User Logic--------------
$(document).ready(function () {
  $("form#input").submit(function (event) {
    event.preventDefault();
    const userMessage = $("#message").val();
    const encodedMessage = (finalEncryptedMessage(userMessage));
    $("#code").html('Here is your encrypted message: ' + encodedMessage);
  });
});