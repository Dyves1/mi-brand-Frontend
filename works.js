let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let file=document.getElementById("myfile")
let msg = document.getElementById("msg");
let tasks_work = document.getElementById("tasks_work");
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


  // have our values in one object
  const data = { image:uploaded_image,title:textInput.value,content:textarea.value };
console.log (data)
//   // interaction with the API endpoint
  fetch('http://localhost:3000/api/v1/works', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    if (data.ok){
      alert(data.message)
    } else {
      alert(data.errors)
    }
  })
  .catch(error => alert(error))
});


fetch('http://localhost:3000/api/v1/works')
.then((response) => response.json())
.then((works) => {
  console.log(works)

  works.data.forEach(work => {


    tasks_work.innerHTML=""
    works.data.forEach(blog => {
      return (tasks_work.innerHTML += `
        
      <div id=${tasks_work}>
           <img src="${work.image}" class="img-blog"><br>
            <span class="fw-bold">${work.title}</span><br>
            <p>${work.content}</p><br>  
            <span class="options">
              <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit" id ="edit"></i>
              <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt" id="del"></i>
            </span>
      </div>
      `);
    
    
      })

})
})