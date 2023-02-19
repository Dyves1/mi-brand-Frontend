let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let file=document.getElementById("myfile")
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

const image_input = document.getElementById("image_input");
var uploaded_image="";

image_input.addEventListener("change",function(){
  const reader =new FileReader();
  reader.addEventListener("load",()=>{
    uploaded_image=reader.result;
    document.getElementById ("display_image").style.backgroundImage= `url("${uploaded_image}")`;
  })

  reader.readAsDataURL(this.files[0])
})
console.log(uploaded_image)

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
  }
  acceptData();
  add.setAttribute("data-bs-dismiss", "modal");
  add.click();

  (() => {
    add.setAttribute("data-bs-dismiss", "");
  })();
};

let data_work = [];

let acceptData = () => {
  data_work.push({
    uploaded_image,
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });

  localStorage.setItem("data_work", JSON.stringify(data_work));

  console.log(data_work);
  createWork();
};
let createWork = () => {
  tasks_work.innerHTML = "";
  data_work.map((x, y) => {
    return (tasks_work.innerHTML += `
    
    <div id=${y}>
         <img src="${x.uploaded_image}" class="img-blog"> <br>
          <span class="fw-bold">${x.text}</span><br>
          <span class="set-date">${x.date}</span><br>
          <p>${x.description}</p><br>  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit" id ="edit"></i>
            <i onClick ="deleteTask(this);createWorks()" class="fas fa-trash-alt" id="del"></i>
          </span>
    </div>
    `);
  });

  resetForm();
};
let resetForm = () => {
  uploaded_image ="";
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();

  data_work.splice(e.parentElement.parentElement.id, 1);

  localStorage.setItem("data_work", JSON.stringify(data_work));

  console.log(data_work);
};
let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;
  uploaded_image = selectedTask.children[0].innerHTML;
  textInput.value = selectedTask.children[1].innerHTML;
  dateInput.value = selectedTask.children[2].innerHTML;
  textarea.value = selectedTask.children[3].innerHTML;

  deleteTask(e);
};
(() => {
  data_work = JSON.parse(localStorage.getItem("data_work")) || [];
  console.log(data_work);
  createWork();
})();