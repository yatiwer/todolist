///z.kiani:sidebar
const menuButton = document.getElementById("BergurMenu");
const sidebar = document.getElementById("navMenu");
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById("closeMenu");
const mainContent = document.getElementById("mainContent");
//const mainContent = document.querySelector(".main-content");

menuButton.addEventListener('click', () => {
  sidebar.style.right=0;
  sidebar.style.display = "block";
  overlay.style.display = 'block';
  mainContent.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  sidebar.style.display = "none";
  mainContent.style.display = "block";
  overlay.style.display = "none";
});

overlay.addEventListener('click', () => {
  sidebar.style.display = 'none';
  overlay.style.display = 'none';
  mainContent.style.display = "block";
});

window.addEventListener("resize", ()  =>{
  if (window.innerWidth > 768) {
     sidebar.style.display = "block";
     mainContent.style.display = "block";
     overlay.style.display = "none";
  }
  else{
    sidebar.style.display = "none";
    mainContent.style.display = "block";
    overlay.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleTheme = document.getElementById("toggle-theme");
  const themeIcon   = document.getElementById("theme-icon");
  const themeText   = document.getElementById("theme-text");

  if (!toggleTheme || !themeIcon || !themeText) return;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    themeIcon.src = "./assets/images/sun.png";
    themeText.textContent = 'روشن';
  } else {
    document.documentElement.classList.remove('dark');
    themeIcon.src = "./assets/images/moon.png";
    themeText.textContent = 'تاریک';
  }

  toggleTheme.addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
      themeIcon.src = "./assets/images/moon.png";
      themeText.textContent = 'تاریک';
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
      themeIcon.src = "./assets/images/sun.png";
      themeText.textContent = 'روشن';
    }
  });
});
//Z.Bayat
// Display the form and create a new task based on the user entered information
const addTaskbutton = document.querySelector('.add-task-btn');
const form = document.querySelector('.task-From');
addTaskbutton.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  }
 });
const addTagbutton = document.querySelector(".add-tag-btn");
const priorityTag = document.querySelector(".tag-Form");
addTagbutton.addEventListener("click", () => {
 
  if (priorityTag.classList.contains("hidden")) {
    priorityTag.classList.remove("hidden");
    priorityTag.classList.add("inline-block");
  }
  else {
    priorityTag.classList.remove("inline-block");
    priorityTag.classList.add("hidden");
  }
});
let selectedPriority= 3;
const priorityValue = document.querySelectorAll('.priority-btn');
priorityValue.forEach(button =>{
  button.addEventListener("click",()=>{
    if(button.classList.contains('low')){
      selectedPriority = 3;
    } else if (button.classList.contains("medium")) {
      selectedPriority = 2;
    } else if (button.classList.contains("high")) {
      selectedPriority = 1;
    }
  });
});
const priorityOptions = document.getElementById('priority-options'); 
const Priority = document.getElementById('selected-priority'); 
const priorityLabel = document.getElementById('priority-label'); 
const removePriority = document.getElementById('remove-priority'); 
priorityValue.forEach(btn => { 
    btn.addEventListener('click', () => { 
        const value = btn.textContent.trim();
         priorityOptions.classList.add('hidden'); 
         Priority.classList.remove('hidden'); 
         priorityLabel.textContent = value; 
         Priority.classList.remove( 'bg-emerald-200', 'text-emerald-700', 'bg-amber-200', 'text-amber-600', 'bg-red-100', 'text-red-600' );
         priorityTag.classList.remove('bg-white', 'border' ,'border-gray-200','shadow','shadow-2xl', 'rounded-md');
         if (value === 'پایین') { 
            Priority.classList.add('bg-emerald-200', 'text-emerald-700');
        } else if (value === 'متوسط') { 
            Priority.classList.add('bg-amber-200', 'text-amber-600'); 
        } else if (value === 'بالا') { 
            Priority.classList.add('bg-red-100', 'text-red-600');
        } 
    }); 
}); 
removePriority.addEventListener('click', () => { 
    Priority.classList.add('hidden'); 
    priorityOptions.classList.remove('hidden'); 
    priorityLabel.textContent = '';
    priorityTag.classList.add( 'bg-white', 'border' ,'border-gray-200','shadow');
 });
const inputTitle =document.getElementById("title"); 
const submitButton = document.getElementById("submitButton"); 
inputTitle.addEventListener("input", () => { 
  if (inputTitle.value.trim() !== "") { 
    submitButton.disabled = false; 
    submitButton.classList.remove("bg-blue-400", "hover:cursor-not-allowed"); 
    submitButton.classList.add("bg-blue-600", "hover:cursor-pointer"); 
  } else { 
    submitButton.disabled = true; 
    submitButton.classList.remove("bg-blue-600", "hover:cursor-pointer"); 
    submitButton.classList.add("bg-blue-400", "hover:cursor-not-allowed"); 
  }
});

const closeButton = document.getElementById("closeButton"); 
closeButton.addEventListener("click", () => { 
  form.classList.add("hidden"); 
  inputTitle.value = ''; 
  document.getElementById('description').value = ''; 
  submitButton.disabled = true;
  submitButton.classList.remove("bg-blue-600", "hover:cursor-pointer"); 
  submitButton.classList.add("bg-blue-400", "hover:cursor-not-allowed");
  priorityTag.classList.remove("inline-block");
  priorityTag.classList.add("hidden");
  priorityLabel.textContent = '';
  Priority.classList.add('hidden');
  priorityOptions.classList.remove('hidden');
  priorityTag.classList.add('bg-white', 'border', 'border-gray-200', 'shadow'); 
  Priority.classList.remove('bg-emerald-200', 'text-emerald-700', 'bg-amber-200','text-amber-600', 'bg-red-100', 'text-red-600'); 
});

class task {
  constructor(id, title, description, priority) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.isCompleted = false;
  }
  taskDone() {
    this.isCompleted = !this.isCompleted;
  }
}

class taskManager {
  constructor() {
    this.tasks = [];
    this.listContainer = document.getElementById("list-container");
    this.loadTasksFromStorage();
  }
  AddTask(newTask) {
    this.tasks.push(newTask);
    this.saveTasksToStorage();
    this.renderTask();
  }
  saveTasksToStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
  loadTasksFromStorage() {
    const data = localStorage.getItem("tasks");
    if (data) {
      this.tasks = JSON.parse(data);
    }

    this.renderTask();
  }
  sortTask() {
    this.tasks.sort((a, b) => a.priority - b.priority);
  }
  
  renderTask() {
    this.sortTask();
    this.listContainer.innerHTML = "";
    const completedContainer = document.querySelector(".completed-tasks"); 
    completedContainer.innerHTML = "";

    this.tasks.forEach((item) => {
      let priorityColor = "bg-red-400";
      let tagColor = "bg-red-100 text-red-600";
      let tagText = "بالا";

      if (item.priority === 2) {
        priorityColor = "bg-yellow-400";
        tagColor = "bg-yellow-100 text-yellow-600";
        tagText = "متوسط";
      } else if (item.priority === 3) {
        priorityColor = "bg-green-400";
        tagColor = "bg-green-200 text-green-600";
        tagText = "پایین";
      }
      const li = document.createElement("li");
      li.dataset.id = item.id;
      li.className = "relative bg-white shadow rounded-xl p-3 pr-4 md:h-28 dark:bg-slate-500 ";
      li.innerHTML = `
       <div class="absolute top-4 bottom-4 right-0 w-1 ${priorityColor} rounded-l-full"></div>
       <div class="flex justify-between items-start">
        <div class="flex items-center gap-3 mb-2 dark:text-white">
         <input type="checkbox" class="w-3 h-3 text-blue-500 form-checkbox" />
         <span class="task-title text-sm">${item.title}</span>
         <span class="hidden md:inline-block text-xs px-3 py-0.5 rounded-md ${tagColor} mr-4">${tagText}</span>
        </div>

    
        <svg xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-gray-400 edit-delete-trigger cursor-pointer dark:text-white"
          viewBox="0 0 20 20" fill="currentColor">
         <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
       </div>
       <span class="inline-block md:hidden text-xs px-3 py-0.5 rounded-md ${tagColor} mr-4">${tagText}</span>
       <p class="task-desc text-sm text-gray-500 dark:text-white mb-4 p-4">${item.description}</p>
       `;
      
       const checkbox = li.querySelector("input[type='checkbox']");
      const titleSpan = li.querySelector(".task-title");
      const descP = li.querySelector(".task-desc");
      if (item.isCompleted) {
      checkbox.checked = true; 
      titleSpan.classList.add("line-through"); 
      if (descP) descP.classList.add("line-through"); 
      completedContainer.appendChild(li); 

      const bar = li.querySelector('div.absolute.right-0');
      if (bar) {
        bar.classList.remove('top-4', 'bottom-4');    
        bar.classList.add('top-1', 'bottom-1', 'right-[1px]');        
      }} else {
      this.listContainer.appendChild(li);
      }
    });
    
    
    if (this.tasks.length === 0) {
      document.getElementById("remaining-count").classList.add("hidden");
      document.getElementById("no-task").classList.remove("hidden");

      const container = document.querySelector(".container");
      const div = document.createElement("div");
      div.className = "empty-list flex flex-col";
      div.innerHTML = `
        <img src="./assets/images/2143202_Artboard 1.png" alt="image" class="h-40 w-52 mr-20 md:h-64 md:w-80 md:mr-64 mt-14">
              
        <h2 class="mb-2.5 mr-16 md:mb-2 md:mr-72 mt-6 text-gray-500" >چه کارهایی امروز برای انجام داری؟</h2>
        <p class=" mr-5 md:mr-64 md:text-3xs text-gray-400 ">میتونی الان تسک‌هاتو اینجا بنویسی و برنامه ریزی رو شروع کنی!</p>
    
      `;
      container.appendChild(div);
    }
    
    
   
document.addEventListener("DOMContentLoaded", function() {
    var headings = document.querySelectorAll("h1, h2, h3, h4");
    var completedHeading = null;
    for (var i = 0; i < headings.length; i++) {
      var text = headings[i].textContent;
    if (text.indexOf("تسک") !== -1 && text.indexOf("انجام") !== -1) {
    completedHeading = headings[i];
    break;
    }
  }
    var countEl = null;
    if (completedHeading) {
        countEl = document.createElement("div");
        countEl.id = "completed-count";
        completedHeading.parentNode.insertBefore(countEl, completedHeading.nextSibling);
    }
    function toPersian(num) {
        var farsiDigits = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
        return num.toString().split("").map(function(d) {
            return farsiDigits[parseInt(d)] || d;
        }).join("");
    }
 function updateCompletedCount() {
  if (!countEl) return;

  
  countEl.classList.add(
    "relative",
    "text-sm",
    "text-gray-500",
    "mt-2",
    "font-medium",
    "right-3"
  );

  
  var count = document.querySelectorAll(
    ".completed-tasks li"
  ).length;

 
  countEl.textContent = toPersian(count) + " تسک انجام شده است";
}


    function hideLabels(task) {
    var prioWords = ["بالا","متوسط","پایین"];
    var descendants = task.querySelectorAll("*");
    for (var k = 0; k < descendants.length; k++) {
    var el = descendants[k];
    if (prioWords.indexOf(el.textContent.trim()) !== -1) {
    el.style.display = "none";
            }
        }
    }
    function showLabels(task) {
    var prioWords = ["بالا","متوسط","پایین"];
    var descendants = task.querySelectorAll("*");
    for (var k = 0; k < descendants.length; k++) {
    var el = descendants[k];
    if (prioWords.indexOf(el.textContent.trim()) !== -1) {
    el.style.display = "";
            }
        }
    }
    var completedList = document.querySelector(".completed-tasks");
    if (completedList) {
    var items = completedList.querySelectorAll("li");
    for (var j = 0; j < items.length; j++) {
    hideLabels(items[j]);
        }
    }
    updateCompletedCount();
    if (completedList) {
    var observer = new MutationObserver(function(mutations) {
    for (var m = 0; m < mutations.length; m++) {
    var mutation = mutations[m];
    for (var a = 0; a < mutation.addedNodes.length; a++) {
    var node = mutation.addedNodes[a];
    if (node.nodeType === 1) {
    hideLabels(node);
           }
        }
    for (var b = 0; b < mutation.removedNodes.length; b++) {
    var node = mutation.removedNodes[b];
    if (node.nodeType === 1) {
    showLabels(node);
          }
         }
        }
    updateCompletedCount();
    });
    observer.observe(completedList, { childList: true });
  }
  });
 }

AddEventListeners() {
  document.querySelectorAll(".edit-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const taskId = e.target.closest("li").dataset.id;
      this.EditTask(taskId); 
    });
  });
  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      this.RemoveTask(e);
    }); 
  });
};

EditTask(taskId) {
  const taskToEdit = this.tasks.find(task => task.id == taskId);

  const newTitle = prompt("Enter new task title", taskToEdit.title);
  const newDesc = prompt("Enter new task description", taskToEdit.description);
  let newPri = prompt("Enter new task priority (1 = High, 2 = Medium, 3 = Low)", taskToEdit.priority);
  newPri = parseInt(newPri);
  if (![1, 2, 3].includes(newPri)) {
    alert("Invalid priority. Please enter 1, 2, or 3.");
    return; 
  }

  if (newTitle !== null && newDesc !== null) {
    taskToEdit.title = newTitle;
    taskToEdit.description = newDesc;
    taskToEdit.priority = newPri;

    this.saveTasksToStorage();
    this.renderTask(); 
  }
};
RemoveTask(e) {
  const taskid = e.target.closest("li").dataset.id;
  this.tasks = this.tasks.filter((item) => item.id != taskid);
  localStorage.setItem("tasks", JSON.stringify(this.tasks));
  this.renderTask();
}}
  
  
const taskmanager = new taskManager();
form.addEventListener("submit", (e) => {
  //e.preventDefault();
  const taskTitle = document.getElementById("title");
  const taskDesc = document.getElementById("description");
  const id = Math.random() * 1000;
  const NewTask = new task(
    id,
    taskTitle.value,
    taskDesc.value,
    selectedPriority
  );
  taskmanager.AddTask(NewTask);
  console.log(taskmanager);
  taskTitle.value = "" ; 
  taskDesc.value = "" ; 
  selectedPriority = null ; 
  submitButton.disabled = true; 
  submitButton.classList.remove("bg-blue-600", "hover:cursor-pointer"); 
  submitButton.classList.add("bg-blue-400", "hover:cursor-not-allowed"); 
});







document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();

  
  const weekday = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    weekday: "long",
  }).format(today);
  const day = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    day: "numeric",
  }).format(today);
  const month = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    month: "long",
  }).format(today);
  const year = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
  }).format(today);

  const formatted = `امروز ${weekday}، ${day} ${month} ${year}`;
  const dateElement = document.getElementById("today");

  
  dateElement.textContent = formatted;
});


document.addEventListener("DOMContentLoaded", () => {
  const today_mobile = new Date();

  
  const weekday = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    weekday: "long",
  }).format(today_mobile);
  const day = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    day: "numeric",
  }).format(today_mobile);
  const month = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    month: "long",
  }).format(today_mobile);
  const year = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
  }).format(today_mobile);

  const formatted = `امروز ${weekday}، ${day} ${month} ${year}`;
  const dateElement = document.getElementById("today_mobile");

  
  dateElement.textContent = formatted;
});




function countRemainingTasks() {
  const allTasks = document.querySelectorAll(".form-checkbox");
  let remaining = 0;

  allTasks.forEach((task) => {
    if (!task.checked) {
      remaining++;
    }
  });

  
  const persianNumber = remaining.toLocaleString("fa-IR");

  document.getElementById(
    "remaining-count"
  ).textContent = ` ${persianNumber} تسک را باید انجام دهید`;
}


document.addEventListener("DOMContentLoaded", countRemainingTasks);


document.addEventListener("change", function (e) {
  if (e.target.classList.contains("form-checkbox")) {
    countRemainingTasks();
  }
});



document.addEventListener("change", function(e) {
  if (e.target.classList.contains("form-checkbox")) {
    const taskItem      = e.target.closest("li");
     const taskId = parseFloat(taskItem.dataset.id);
    const taskObj = taskmanager.tasks.find(t => t.id === taskId);
    if (taskObj) {
      taskObj.isCompleted = e.target.checked;
      taskmanager.saveTasksToStorage();
    }
    const titleSpan     = taskItem.querySelector(".task-title");
    const todaysList    = document.querySelector(".todays-tasks");
    const completedList = document.querySelector(".completed-tasks");

    if (e.target.checked) {
      
      completedList.appendChild(taskItem);
      titleSpan.classList.add("line-through");
       const descP = taskItem.querySelector('.task-desc');
       if (descP) descP.classList.add('line-through');

    } else {
      
      todaysList.appendChild(taskItem);
      titleSpan.classList.remove("line-through");
      titleSpan.classList.remove("line-through");
      const descP = taskItem.querySelector('.task-desc');
      if (descP) descP.classList.remove('line-through');
    }

    countRemainingTasks();
  }
});

document.querySelector("#list-container").addEventListener("click", (e) => {
  if (e.target.closest(".edit-delete-trigger")) {
    const taskItem = e.target.closest("li");
    const existingMenu = taskItem.querySelector(".edit-delete-menu");

    if (existingMenu) {
      existingMenu.remove();
    } else {

      const menu = document.createElement("div");
      menu.className =
        "edit-delete-menu absolute top-0 right-full mr-2 bg-white shadow rounded p-2 flex flex-col gap-2";
      menu.innerHTML = `
        <button class="edit-btn flex items-center gap-1 hover:text-blue-600 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
        <button class="delete-btn flex items-center gap-1 hover:text-red-600 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      `;
      taskItem.append(menu);

      taskmanager.AddEventListeners();

    }
    e.stopPropagation();
  }
});
document.querySelector(".completed-tasks").addEventListener("click", (e) => {
  if (e.target.closest(".edit-delete-trigger")) {
    const taskItem = e.target.closest("li");
    const existingMenu = taskItem.querySelector(".edit-delete-menu");
    if (existingMenu) {
      existingMenu.remove();
    } else {
      const menu = document.createElement("div");
      menu.className = "edit-delete-menu absolute top-0 right-full mr-2 bg-white shadow rounded p-2 flex flex-col gap-2";
      menu.innerHTML =`
        <button class="edit-btn flex items-center gap-1 hover:text-blue-600 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
        <button class="delete-btn flex items-center gap-1 hover:text-red-600 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      `;
      taskItem.append(menu);
      taskmanager.AddEventListeners();
    }
    e.stopPropagation();
  }
});



function shrinkCompletedItem(li) {
  if (li.dataset.shrunk) return;
  li.dataset.shrunk = 'true';

  li.classList.remove("p-3", "md:h-28", "mb-4");
  li.classList.add("py-1", "px-3", "text-sm", "leading-tight", "mb-1", "max-h-[60px]");
}
function restoreItem(li) {
  if (!li.dataset.shrunk) return;
  delete li.dataset.shrunk;

  li.classList.remove("py-1", "px-3", "text-sm", "leading-tight", "mb-1", "max-h-[60px]" );
  li.classList.add("p-3", "md:h-28", "mb-4");
}


document.querySelectorAll(".completed-tasks li").forEach(shrinkCompletedItem);
document.querySelectorAll(".todays-tasks li").forEach(restoreItem);


const completedList = document.querySelector(".completed-tasks");
const obs = new MutationObserver(mutations => {
  mutations.forEach(m => {
    // any new <li> added → shrink it
    m.addedNodes.forEach(node => {
      if (node.nodeType === 1 && node.matches("li")) {
        shrinkCompletedItem(node);
      }
    });
    // any <li> removed → restore it
    m.removedNodes.forEach(node => {
      if (node.nodeType === 1 && node.matches("li")) {
        restoreItem(node);
      }
    });
  });
});
obs.observe(completedList, { childList: true });

