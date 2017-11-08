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
      "status"        : "todo",
      "done_on"       : null,
      "user"          : [0]
    },
    {
      "title"         : "Faire la vaisselle",
      "created_on"    : 1510180290,
      "deadline"      : 1510180457,
      "status"        : "done",
      "done_on"       : null,
      "user"          : [0]
    },
    {
      "title"         : "Sortir les poubelles",
      "created_on"    : 1510180290,
      "deadline"      : 1510180457,
      "status"        : "late",
      "done_on"       : null,
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
  console.log(task);
  if(task.done == false){

  }
  else{

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
