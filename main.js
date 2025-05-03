const BergurMenu = document.getElementById("BergurMenu");
const navMenu = document.getElementById("navMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");
const body = document.body;
BergurMenu.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    body.classList.toggle("overflow-hidden");
});




/*const toggleTheme = document.getElementById("toggle-theme");

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
*/
