// Get input value after user clicks on submit button
//Test code 

function newTask(){
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);

  if(inputValue === ''){
    alert("Please enter a new task to do!");
  } else{
    document.getElementById("myUL").appendChild(li);
  }

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "closeButton";
  span.appendChild(text);
  li.appendChild(span);

}



///
/*
const submitButton = document.querySelector("#submit");

submitButton.addEventListener('click', sayHello)

function sayHello(){
  const inputValue = document.getElementById("input").value
  document.getElementById("#addList").textContent(inputValue)
  
  console.log("Hello")
}

*/

