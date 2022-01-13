// Get input value after user clicks on submit button

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
  span.appendChild(txt);
  li.appendChild(span);

  for(i = 0; i < close.lenghth; i++){
    close[i].onclick = function(){
      var div = this.parentElement;
      div.style.display = "none";
    }
  }



}

// Delete the task - add onclick to close




// Cross out the completed task
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Clear the input field after each submission


//Clear the whole task list


