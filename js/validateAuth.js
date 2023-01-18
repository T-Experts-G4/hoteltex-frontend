const token = localStorage.getItem('token')

if(!token){
    window.location.href = '/pages/login.html'
}

function logout(){
   localStorage.removeItem('token')
   document.location.reload()
}