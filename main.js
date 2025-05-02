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
addTaskbutton.addEventListener("click",()=>{
  if(form.classList.contains('hidden')){
    form.classList.remove("hidden");
  }
})




