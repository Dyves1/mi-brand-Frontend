   const emailEl= document.getElementById('email');
   const commentEl= document.getElementById('comment');
   const error_message =document.getElementById('error-message');
   const send=document.getElementById('comment-button')


// let comments=[];
// function acceptComment() {
// console.log("my comment")
// alert("Comment sent successfully")
//    comments.push({
//     newEmail:emailEl.value,
//     newComment:commentEl.value,
//   });
//   localStorage.setItem("comments",JSON.stringify(comments));
//   console.log(comments)
// }
// send.onclick = acceptComment

const form = document.getElementById("form-comment");

// add event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // grab the values in our inputs
//   const name = document.getElementById("book-name").value;
//   const author = document.getElementById("book-author").value;

  // have our values in one object
  const data = { email:emailEl.value, content:commentEl.value };

  // interaction with the API endpoint
  fetch('http://localhost:3000/api/v1/comments', {
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
   console.log(data)
    if (data.ok){
      alert(data.message)
    } else {
      alert(data.errors_message)
    }
  })
  .catch(error => alert(error))
  resetForm()
});
const resetForm=()=>{
  
  emailEl.value=""
  commentEl.value=""
}
