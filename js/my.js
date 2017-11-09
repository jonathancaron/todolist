"use strict";

// DATA MANAGEMENT //
function getData(){
	// Load data from database sql / nosql / json
	let data = {
		"user" : {
			"name" 		: "john",
			"email" 	: "johnsmith@matrix.com",
			// "password" 	: "sjdsjdhu2h2njjsd",
			// "task" 		: [0,1]
		},
		"task" : [
			{
				"title" 		: "Faire Ã  manger",
				"created_on" 	: 1510180290,
				"deadline"		: 1510180457,
				"done_on"		: null,
				"user" 			: [0]
			},
			{
				"title" 		: "Faire la vaisselle",
				"created_on" 	: 1510180290,
				"deadline"		: 1510180457,
				"done_on"		: 1510180457,
				"user" 			: [0,1]
			},
			{
				"title" 		: "Sortir les poubelles",
				"created_on" 	: 1510180290,
				"deadline"		: 1510180457,
				"done_on"		: 1510180567,
				"user" 			: [0]
			}
		]
	}

	return data;
}

function updateData(){
	// update data to database sql / nosql / json

}

function setUser(nickname){
	document.getElementById("prenom").innerHTML = nickname;
}

function setTask(task){
	// console.log(task);
	function display(status){
		let node = document.createElement('li'); // Create a <li>
		node.className = "list-item";
		let textnode = document.createTextNode(task.title); // Create a text
		node.appendChild(textnode); // Append the text to the node <li>
		document.getElementById(status).appendChild(node); // Append the node <li> to element #todo
	}

	let status = task.done_on != null ? ( task.done_on <= task.deadline ? "done" : "late" ) : "todo";
	display(status);
}

function endTask(todoItem){
	console.log(todoItem)
  let status = null;
  if(true){
    status = document.getElementById("done");
  }
  else {
    status = document.getElementById("late");
  }
  status.appendChild(this);
}

// APP
const app = function(data){
	// User
	let nickname = data.user.name;
	setUser(nickname);

	// Task
	let tasks = data.task;
	for(let i in tasks){
		setTask(tasks[i]);
	}

	// Events listener
	let todo = document.getElementById("todo");
	// console.log(todo);
	let todoItems = todo.getElementsByClassName("list-item");
	// console.log(todoItems);
	return false;
	let i = 0;
	while( todoItem[i] ){
		// console.log(todoItem[i])
		todoItem[i].addEventListener( "click",endTask( todoItem[i]));
		i++;
	}
}

// Run App
app(getData());
