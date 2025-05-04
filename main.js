const BergurMenu = document.getElementById("BergurMenu");
const navMenu = document.getElementById("navMenu");
const closeMenu = document.getElementById("closeMenu");
//const overlay = document.getElementById("overlay");
//const body = document.body;

BergurMenu.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
    //overlay.classList.toggle("hidden");
   // body.classList.toggle("overflow-hidden");
});




const toggleTheme = document.getElementById("toggle-theme");
toggleTheme.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
});



const addTaskbutton = document.querySelector('.add-task-btn');
const form = document.querySelector('.task-From');
console.log(addTaskbutton);
console.log(form);
addTaskbutton.addEventListener("click",()=>{
  if(form.classList.contains('hidden')){
    form.classList.remove("hidden");
  }
})

//////////Display the form and create a new task based on the selected priority

const addTagbutton = document.querySelector('.add-tag-btn');
const priorityTag = document.querySelector('.tag-Form');
addTagbutton.addEventListener("click",()=>{
  if(priorityTag.classList.contains('hidden')){
    priorityTag.classList.remove("hidden");
    priorityTag.style.display = 'inline-block';
  }
})

let selectedPriority= null;
const priorityValue = document.querySelectorAll('.priority-btn');
priorityValue.forEach(button =>{
  button.addEventListener("click",()=>{
    if(button.classList.contains('low')){
      selectedPriority = 3;
    }else if(button.classList.contains('medium')){
      selectedPriority = 2;
    }else if(button.classList.contains('high')){
      selectedPriority = 1;  
    }
  })
})

class task {
  constructor(id,title,description,priority){
    this.id = id;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.isCompleted = false;
  }
  taskDone(){
    this.isCompleted = !this.isCompleted;
  }
}


class taskManager{
  constructor(){
    this.tasks = []; 
  }
  AddTask(newTask){
    this.tasks.push(newTask); 
  }
}


const taskmanager = new taskManager();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskTitle = document.getElementById('title')
  const taskDesc = document.getElementById('description')
  const id=Math.random()*1000;
  const NewTask = new task(id,taskTitle.value,taskDesc.value,selectedPriority);
  taskmanager.AddTask(NewTask);
});


////////////////////

