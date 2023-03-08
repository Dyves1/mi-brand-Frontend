   const emailEl= document.getElementById('email');
   const commentEl= document.getElementById('comment');
   const error_message =document.getElementById('error-message');
   const send=document.getElementById('comment-button')


let comments=[];
function acceptComment() {
console.log("my comment")
alert("Comment sent successfully")
   comments.push({
    newEmail:emailEl.value,
    newComment:commentEl.value,
  });
  localStorage.setItem("comments",JSON.stringify(comments));
  console.log(comments)
}
send.onclick = acceptComment