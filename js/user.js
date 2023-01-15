const nmUser = document.getElementById("nmUser");

console.log(localStorage.getItem('user'));
nmUser.innerText = localStorage.getItem('user');