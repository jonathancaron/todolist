"use strict"
function getData(){
let data = {
  "user" : {
      "name"      : "john",
      "email"     : "johnsmith@matrix.com",
      "password"  : "qsdqsfdssqd",
      "task"      : [0,1]
  },
  "task" : [
    {
      "title"         : "Faire à manger",
      "created_on"    : 1510180290,
      "deadline"      : 1510180457,
      "done_on"       : null,
      "user"          : [0]
    },
    {
      "title"         : "Faire la vaisselle",
      "created_on"    : 1510180290,
      "deadline"      : 1510180457,
      "done_on"       : 1510180457,
      "user"          : [0,1]
    },
    {
      "title"         : "Sortir les poubelles",
      "created_on"    : 1510180290,
      "deadline"      : 1510180457,
      "done_on"       : 1510180567,
      "user"          : [0]
    }
  ]
}
return data;
}
function updateData(){

}
function setUser(nickname){
  document.getElementById('prenom').innerHTML = nickname;
}
function setTask(task){
  function display(status){
    let node = document.createElement('li');
    let textnode = document.createTextNode(task.title);
    node.appendChild(textnode);
    document.getElementById(status).appendChild(node);
  }
  console.log(task);
  if(task.done_on === null)
  {
    display("todo");
  }
  else {
    if(task.done_on <= task.deadline){
      display("done");
    }
    else{
      display("late");
    }
  }

}
const app = function(data){
  let nickname = data.user.name;
  setUser(nickname);

  let tasks = data.task;
  for(let i in tasks){
    setTask(tasks[i]);
  }

}

app(getData());
