const toggleTheme = document.getElementById("toggle-theme");

toggleTheme.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
});

/*const test =document.getElementById('add-task-btn');
const test2 =document.querySelector('.add-task-btn');
console.log(test);
console.log(test2);
const form = document.querySelector('.task-From');
console.log(form);
const test3 = form.classList.contains('hidden');
console.log(test3);


test2.addEventListener("click",()=> {
  if (test3) {
    form.classList.remove("hidden");
  }
});
*/

const addTaskbutton = document.querySelector('.add-task-btn');
const form = document.querySelector('.task-From');
addTaskbutton.addEventListener("click",()=>{
  if(form.classList.contains('hidden')){
    form.classList.remove("hidden");
  }
})

class task {
  constructor(id,title,description,priority,completed){
    this.id=id;
    this.title=title;
    this.description=description;
    this.priority=priority;
    this.completed=completed
  }
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = document.getElementById('title')
  console.log(newTask);
  const taskTitle = newTask.value;
  console.log(taskTitle);
});


