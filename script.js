var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");

//function to return trimmed input length
function inputLength() {
	return input.value.trim().length;
}

//Function to create a new list with delete button
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value.trim()));
	var deleteButton = createDeleteButton();
	li.appendChild(deleteButton);

	ul.appendChild(li);
	input.value = "";
}

//Function to Create and return Delete Button element
function createDeleteButton() {0
	var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("DELETE"));
    btn.className = "delete-btn";  // Add class for styling if needed
    return btn;
}

//Add list item after clicking "enter" button
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//Add list item after hitting "Enter" Key
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.key === "Enter") {
		createListElement();
	}
}

//Delete  the recent list item after hitting "delete" Key
function toggleOrRemove(event) {
	//Toggle the "done" class when a list item is clicked
	if (event.target.tagName === "LI"){
		event.target.classList.toggle("done");
	}

//Remove the list item if the button is clicked.
	else if(event.target.tagName === "BUTTON" && event.target.classList.contains("delete-btn"))	{
		event.target.parentElement.remove();
	}
}

//add Delete button on existing list items.
items.forEach(function(item){
	item.appendChild(createDeleteButton());
})


//Adding click event on the unordered list.
ul.addEventListener("click", toggleOrRemove);

//Adding click event on the "enter" button
button.addEventListener("click", addListAfterClick);

//Adding keypress event on the "input" form.
input.addEventListener("keypress", addListAfterKeypress);