import { firestore } from "../firebase.js"
import {doc, getDocs , collection, onSnapshot, deleteDoc, setDoc} from "firebase/firestore"
import axios from 'axios'


const getHtml = ()=>{
  axios.get('https://vitejs-vite-3kktfw--5173.local.webcontainer.io/home.html', {
    headers : {
      "Content-Type" : "text/html"
    }
  })
  .then(res =>{
    console.info(res)
  })
  .catch(err =>{
    console.error(err)
  })
}


window.mapHobby = (hobby)=>{
  hobby.map((e)=>{
    return `<span>${e.name}</span>`
  })
}

const cardArticle = (author, description, id, hobby)=>{
  return `
    <div class="article_card" >
      <p>${description}</p>
      <small>${author}</small>
      <button onclick="handleDelete(${id})">delete</button>
      <div>
        ${hobby.map((e)=>{
          return `<span>${e.name}</span>`
        }).join("")}
      </div>
    </div>
  `
}

// handle delete
window.handleDelete = (id)=>{
  console.info(id)
  const artId = doc(firestore, "/article/" + id)
  deleteDoc(artId)
  .then(res => console.info("berhasil delete data"))
  .catch(err => console.error(err))
}

window.handleSubmit = (event)=>{
  event.preventDefault()
  let author = event.target.author.value
  let description = event.target.description.value
  let uniqui = Date.now().toString()

  const artColl = doc(firestore, "article/" + uniqui)
  setDoc(artColl, {
    id : uniqui,
    author : author,
    description : description,
    hobby : [
      {
        id : 1,
        name : "makan"
      },
      {
        id : 2,
        name : "makan"
      }
    ],
    createdAt : Date.now()
  })
  .then(res => {
    console.info("berhasil masukan data")
  })
  .catch(err => console.info(err))

  document.getElementById("article_form").reset()

}

const getArticleData = async ()=>{
  const arWrapper = document.getElementById("article_wrapper")
  arWrapper.innerHTML = ''
  let newArr = []
  const artRef = collection(firestore, "article")
  await getDocs(artRef)
  .then(res =>{
    res.forEach((e)=>{
      console.info(e.data())
      arWrapper.innerHTML += cardArticle(e.data().author, e.data().description, e.data().id, e.data()?.hobby)
    })
  })
}

window.onload = ()=>{
  onSnapshot(collection(firestore, "article"), (rec)=>{
    getArticleData()
  })

  getHtml()
}