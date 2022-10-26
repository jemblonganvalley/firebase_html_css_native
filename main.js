import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import axios from 'axios'
const page = window.location.pathname


const getHtml = async()=>{
  const result = await axios.get('https://vitejs-vite-3kktfw--5173.local.webcontainer.io/home.html', {
    headers : {
      "Content-Type" : "text/html"
    }
  })

  return result.data
  
}


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

