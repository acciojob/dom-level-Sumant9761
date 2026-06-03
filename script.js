//your JS code here. If required.
const element = document.getElementById("level");

ley level = 0;

while(element){
	level++;
	element = element.parentElement;
}

alert("The level of the element is: " + level);
