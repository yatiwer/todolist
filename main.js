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


//////////Display the form and create a new task based on the selected priority

const addTaskbutton = document.querySelector('.add-task-btn');
const form = document.querySelector('.task-From');

console.log(addTaskbutton);
console.log(form);
addTaskbutton.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  }
});
// ???????

const addTagbutton = document.querySelector(".add-tag-btn");
const priorityTag = document.querySelector(".tag-Form");
addTagbutton.addEventListener("click", () => {
  if (priorityTag.classList.contains("hidden")) {
    priorityTag.classList.remove("hidden");
    priorityTag.style.display = "inline-block";
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
    this.listContainer = document.getElementById("list-container")
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
  sortTask(){
    this.tasks.sort((a , b) => a.priority - b.priority) ; 
  }
  renderTask(){
    this.sortTask() ;
    this.listContainer.innerHTML = "" ;
    
    
    this.tasks.forEach(item => {
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
      const li = document.createElement("li") ; 
      li.className = "relative bg-white shadow rounded-xl p-3 pr-4 md:h-28  " ;
      li.innerHTML = `
        <div class="absolute top-0 bottom-0 right-0 w-1 ${priorityColor} rounded-r-full"></div>
            <div class="flex justify-between">
              <div class=" flex items-center gap-3 mb-2">
                <input type="checkbox" class="w-3 h-3 text-blue-500 form-checkbox" />
                <span class="task-title text-sm">${item.title}</span>
                <span class="hidden md:inline-block text-xs px-3 py-0.5 rounded-md  ${tagColor} mr-4   ">${tagText}</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor" id="EditDeleteMenu">
                <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" />
            </div>
            
             <span class="inline-block text-xs px-3 py-0.5 rounded-md  ${tagColor} mr-4 md:hidden  ">${tagText}</span>
            
            
             <p class="task-desc text-sm text-gray-500 mb-4 p-4 ">${item.description}</p>
      `;
        
      this.listContainer.appendChild(li)
    })
  }
  
}
  
const taskmanager = new taskManager();
form.addEventListener("submit", (e) => {
  e.preventDefault();
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
});





////////////////////

// تاریخ امروز به فرمت شمسی
// این کد تاریخ امروز را برای دسکتاپ به فرمت شمسی نمایش می‌دهد
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();

  // گرفتن اجزای تاریخ به‌صورت جداگانه
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

  // متن نهایی
  dateElement.textContent = formatted;
});

// تاریخ امروز به فرمت شمسی برای نسخه موبایل
// این کد تاریخ امروز را برای نسخه موبایل به فرمت شمسی نمایش می‌دهد
document.addEventListener("DOMContentLoaded", () => {
  const today_mobile = new Date();

  // گرفتن اجزای تاریخ به‌صورت جداگانه
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

  // متن نهایی
  dateElement.textContent = formatted;
});
// تاریخ امروز به فرمت شمسی
// این کد تاریخ امروز را برای نسخه موبایل به فرمت شمسی نمایش می‌دهد

// این تابع برای شمارش تعداد تسک‌های باقی‌مانده استفاده می‌شود
function countRemainingTasks() {
  const allTasks = document.querySelectorAll(".form-checkbox");
  let remaining = 0;

  allTasks.forEach((task) => {
    if (!task.checked) {
      remaining++;
    }
  });

  // نمایش تعداد تسک باقی مانده
  const persianNumber = remaining.toLocaleString("fa-IR");

  document.getElementById(
    "remaining-count"
  ).textContent = ` ${persianNumber} تسک را باید انجام دهید`;
}

// برای اجرای اولیه
document.addEventListener("DOMContentLoaded", countRemainingTasks);

// برای هر بار تغییر وضعیت چک‌باکس
document.addEventListener("change", function (e) {
  if (e.target.classList.contains("form-checkbox")) {
    countRemainingTasks();
  }
});
// این تابع برای شمارش تعداد تسک‌های باقی‌مانده استفاده می‌شود


document.addEventListener("change", function(e) {
  if (e.target.classList.contains("form-checkbox")) {
    const taskItem      = e.target.closest("li");
    const titleSpan     = taskItem.querySelector(".task-title");
    const todaysList    = document.querySelector(".todays-tasks");
    const completedList = document.querySelector(".completed-tasks");

    if (e.target.checked) {
      // تیک خورد → تکسک انجام شده
      completedList.appendChild(taskItem);
      titleSpan.classList.add("line-through");
      

    } else {
      // تیک برداشته شد → برمی‌گرده تو تسک‌های امروز
      todaysList.appendChild(taskItem);
      titleSpan.classList.remove("line-through");
    }

    countRemainingTasks();
  }
});

document.querySelectorAll('.edit-delete-trigger').forEach(trigger => {
  trigger.addEventListener('click', function(e) {
    e.stopPropagation();

    const taskItem = this.closest('li');
    const existingMenu = taskItem.querySelector('.edit-delete-menu');
    if (existingMenu) {
      existingMenu.remove();
      return;
    }

    const menu = document.createElement('div');
    
    menu.className = 'edit-delete-menu absolute top-0 right-full mr-2 bg-white shadow rounded p-2 flex flex-col gap-2';
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

    document.addEventListener('click', function closeMenu(ev) {
      if (!menu.contains(ev.target) && ev.target !== trigger) {
        menu.remove();
        document.removeEventListener('click', closeMenu);
      }
    });
  });
});


