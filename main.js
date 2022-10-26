import './style.css'
const page = window.location.pathname

switch(page){
  case "/":
    window.location.pathname = "/home.html"
    break
    
    case "/about":
    window.location.pathname = "/about.html"
    break

  default : 
    window.location.href = "home.html"
}

