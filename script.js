// Get input value after user clicks on submit button


const submitButton = document.querySelector("#submit");

submitButton.addEventListener('click', sayHello)

function sayHello(){
  const inputValue = document.getElementById("input").value
  document.querySelector("#addList").append(inputValue)
  
  console.log("Hello")
}