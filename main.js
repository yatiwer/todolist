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

const addTaskbutton = document.querySelector(".add-task-btn");
const form = document.querySelector(".task-From");
console.log(addTaskbutton);
console.log(form);
addTaskbutton.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  }
});

//////////Display the form and create a new task based on the selected priority

const addTagbutton = document.querySelector(".add-task-btn");
const priorityTag = document.querySelector(".tag-Form");
addTagbutton.addEventListener("click", () => {
  if (priorityTag.classList.contains("hidden")) {
    priorityTag.classList.remove("hidden");
    priorityTag.style.display = "inline-block";
  }
});

let selectedPriority = null;
const priorityValue = document.querySelectorAll(".priority-btn");
priorityValue.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("low")) {
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
  }
  AddTask(newTask) {
    this.tasks.push(newTask);
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
