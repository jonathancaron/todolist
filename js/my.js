/*methode endtask, dire que la tache est terminée (click*/
"use strict";

let App = {
	config : {
		"nickname" : null,
		"task" : []
	},
	setTask : function(taskID){
		let now  = Math.floor(Date.now() / 1000);
		this.task[taskID].done_on = now;
	},
	start : function(){
		console.log('Starting Application');

		// Adding nickname to html
		let n = document.getElementById("prenom");
			n.innerHTML = this.config.nickname;

		let i = 0;
		while (this.config.task[i]){

			let t = this.config.task[i];
			let status = t.done_on != null ? ( t.done_on <= t.deadline ? "done" : "late" ) : "todo";

			let htmlElem = document.createElement('li'); // Create a <li>

			htmlElem.className = "list-item";
			htmlElem.ID = t.ID;
			htmlElem.deadline = t.deadline;
			let textHtmlElem = document.createTextNode(t.title); // Create a text
			htmlElem.appendChild(textHtmlElem); // Append the text to the node <li>
			document.getElementById(status).appendChild(htmlElem); // Append the node <li> to element #todo
			htmlElem.addEventListener('click', function(event) {
					alert(t.title);
			});
			console.log('Add Task Object: ID - ' + i + ', Object = ' + t.title);
			i++;
		}
	}
}


App.config.nickname = 'John';
App.config.task = [
	{
		"title" 		: "Faire Ã  manger",
		"created_on" 	: 1510180290,
		"deadline"		: 1510180457,
		"done_on"		: null
	},
	{
		"title" 		: "Regarder la tv",
		"created_on" 	: 1510156092,
		"deadline"		: 1510156192,
		"done_on"		: null
	}
]
App.start();
