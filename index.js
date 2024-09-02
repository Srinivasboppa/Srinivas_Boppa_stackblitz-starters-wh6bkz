let express = require('express');
  let app = express();
  let PORT = 3000;

  let numbers = [1,2,3,4,5];

  function addToArr(numbers, num) {
    numbers.push(num);
    return numbers;
  }

  app.get("/numbers/add", (req, res) => {
    let result = addToArr(numbers, 6);
    res.send(result);
  });

  let strings = ["hello", "world", "javascript", "node"];

 function addToStrings(strings, str) {
   strings.push(str);
   return strings;
 }

app.get("/strings/add", (req, res) => {
  let result =addToStrings(strings, "express");
  res.json(result);
})

let  numbersArr = [1, 2, 3, 4, 5];

function sumOfNumbers(numbersArr) {
  let sum = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    sum = sum + numbersArr[i];
  }
  return sum;
}

app.get("/numbers/sum", (req, res) => {
  let result =sumOfNumbers(numbersArr);
  res.json({ sum: result});
})

let numbersArray = [1, 2, 3, 6, 4, 5];

function findMax(numbersArray) {
  let max = numbersArray[0];
  for (let i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] > max) {  // Corrected this line
      max = numbersArray[i];
    }
  }
  return max;
}

app.get("/numbers/max", (req, res) => {
  let result = findMax(numbersArray);
  res.json({ max: result });
});



app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});
