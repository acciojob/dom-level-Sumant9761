//your JS code here. If required.
let level = document.getElementById("level");

let count = 0;     

while(level){
	count++;
	level = level.parentElement;
}

alert("The level of the element is: " + count);
