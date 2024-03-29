import { Home } from "./Home.js";
import { AddArticle } from "./AddArticle.js";
import { loginPage } from "./Login.js";
import { sres } from "./Signup.js";
import { unique } from "./ArticlePreview.js";
import { container } from "./Label.js";
import { admin } from "./admin.js";
const root = window.document.querySelector('#root');
const alertBox = window.document.querySelector('#alertBox');
// tmp reffer to templates 
const tmp = {
             'home': Home,
             'add':AddArticle,
             'login':loginPage,
             'signup': sres,
             'preview':unique,
             'admin':admin
            }

var id;
// inject function to change location without refreshing page
// depend on window.location.href#

function inject(location){ 
    if(location == 'add' && getLocal() == undefined){
        const warning = `<div class="p-20 flex bg-yellow-100 rounded-lg p-4 m-70 text-sm text-yellow-700" role="alert">
        <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div>
            <span class="font-medium">Warning alert!</span> You dont have permission please login.
        </div>
    </div>`;
        root.innerHTML = warning;
    }
    else{
        if(location==undefined)location='home';
        window.location.hash = location;
        root.innerHTML = tmp[location];
        if(window.location.href.includes('login')){
            document.querySelector('#loginBtn').style.display = 'none';
        }
        else{
            document.querySelector('#loginBtn').style.display = 'block';
        }
    }
    if(location.includes('preview')){
        root.innerHTML = unique;
        id = window.location.href.split('?id=')[1]; 
        async function getUnique(){
            const timeIcon = `<i class="fa-solid fa-clock pr-5 text-2xl text-white"></i>`;
            const res = await fetch('http://localhost:3000/api/blogs/'+id+'')
            const article = await res.json();
            document.querySelector('#date').innerHTML=timeIcon+" "+article.createdAt.split('T')[0];
            document.querySelector('#Label').innerHTML=article.label?article.label.name:"NO LABEL";
            document.querySelector('#content').innerHTML=article.content;
            document.querySelector('#title').innerHTML=article.title;
            document.querySelector('#thumbnail').innerHTML=`<img src="${article.imgUrl?"/img/"+article.imgUrl:"/"}" alt="${article.title}" class="m-auto"/>`
            document.querySelector('#author').innerHTML=article.author?"Posted BY : "+article.author.name:"UNKOWN";
        } 
        async function getComments(){
            const res = await fetch('comment/'+id+'');
            const commentsContainer = document.querySelector('#task-comments');
            const comments = await res.json();
            var comment =``;
            if(comments.length!=0){
                comments.forEach(element=>{
                    comment += ` <div  iv class="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                    <div class="flex flex-row justify-center mr-2">
                      <img alt="avatar" width="48" height="48" class="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png">
                      <h3 class="text-indigo-500 hover:text-indigo-600 font-semibold text-lg text-center md:text-left ">${element.email}</h3>
                    </div>
                      <p style="width: 90%" class="text-gray-600 text-lg text-center md:text-left ">${element.content}</p>
                  </div>`
                });
            }
            else{
                comment=`<div class='center flex justify-center font-bold'>THERE IS NO COMMENTS</div>`
            }
            commentsContainer.innerHTML=comment;

        }
        window.getComments = getComments;
        getUnique(); 
        getComments();
        function addcomment(){
            const email = document.querySelector('#email').value;
            const comment = document.querySelector('#comment').value;
            if(email && comment == ''){
                alert('please type something email and comment field are requierd')
            }
            else{
                axios.post('/comment/add', {
                    "email": email,
                    "content": comment,
                    "articleId":id
                  })
                  .then(function (response) {
                        getComments();
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            }
            
        }
        window.addcomment = addcomment;
    }
    if(location.includes('label')){
        const id = window.location.href.split('?id=')[1]; 
        async function getLabArticles(){
            const res = await fetch('http://localhost:3000/label/'+id+'')
            const article = await res.json();
            article.reverse(); // afichage selan la date
            var tempalte = container;
            article.forEach(element => {
                const Blog = `
                <div id="${element.id}" class="w-full md:w-1/2 lg:w-1/3 px-4">
                <div class="p-5 border border-gray-150 max-w-[370px] mx-auto mb-10">
                   <div class="rounded overflow-hidden mb-8">
                      <img onclick="inject('preview?id=${element.id}')"
                      src="${element.imgUrl?"/img/"+element.imgUrl:"/"}"
                      alt="${element.title}" 
                         class="w-full cursor-pointer h-60 hover:scale-150 duration-300"
                         />
                   </div>
                   <div>
                      <span
                         class="
                         cursor-pointer
                         bg-indigo-500 hover:bg-indigo-600
                         rounded
                         inline-block
                         text-center
                         py-1
                         px-4
                         text-xs
                         leading-loose
                         font-semibold
                         text-white
                         mb-5
                         "
                         >
                         <a  onclick="inject('label?id=${element.label.id}')">${element.label?element.label.name:noLabel}</a>
                      </span>
                      <h3  class="cursor-pointer" onclick="inject('preview?id=${element.id}')">
                         <a
                           
                            class="
                            font-semibold
                            text-xl
                            sm:text-2xl
                            lg:text-xl
                            xl:text-2xl
                            mb-4
                            inline-block
                            text-dark
                            hover:text-primary
                            "
                            >
                            ${element.title}
                         </a>
                      </h3>
                      <p id="content" class="h-12 overflow-hidden text-base text-body-color">
                      ${element.content}
                      </p>
                   </div>
                   <a onclick="inject('preview?id=${element.id}')" class="cursor-pointer text-blue-600 hover:underline">Read more</a>
                   <h1 id="author" class="pt-2 text-gray-700 font-bold"><span class="text-indigo-700">Posted By : </span>${element.author?element.author.name:"UNKOWN"}</h1>
                </div>
             </div> 
                `;
                tempalte+=Blog;
            });
                    tempalte+= `
                    </div>
                </div>
            </section>
            `
        root.innerHTML=tempalte;
        } 
        getLabArticles();
    }
    if(location == 'admin'){
        var userTemplate = ``;
        root.innerHTML=tmp[location];
        const dashboard =`<li id="dashboard" class="cursor-pointer md:px-4 md:py-2 hover:text-indigo-400" onclick="inject('admin')">Dashboard<li>`
        if(!document.querySelector('#dashboard')){
            document.querySelector('#ul-menu-home').innerHTML+=dashboard;
        }
        async function getUsers(){
            const res = await fetch('/users');
            const users = await res.json();
            // labels 
            const res2 = await fetch('/label/all');
            const labels = await res2.json();
            // articles
            const res3 = await fetch('/api/blogs');
            const articles = await res3.json();
            document.querySelector('#usersCounter').innerHTML=users.length;
            document.querySelector('#labelsCounter').innerHTML=labels.length;
            document.querySelector('#articlesCounter').innerHTML=articles.length;
            users.forEach(e=>{
                const user = `<tr>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt="">
                    </div>
            
                    <div class="ml-4">
                        <div class="text-sm leading-5 font-medium text-gray-900">${e.name}
                        </div>
                        <div class="text-sm leading-5 text-gray-500">${e.email}</div>
                    </div>
                </div>
            </td>
            
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">UTILISATEUR</div>
                <div class="text-sm leading-5 text-gray-500">Publisher</div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${e.role}</span>
            </td>
            <td
                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                ${e.id}</td>
            <td
                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <a onclick="deleteUser(${e.id})" class="text-indigo-600 hover:text-indigo-900"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg></a>
            </td>
            </tr>`;
            userTemplate+=user;
            })
            document.querySelector('#table').innerHTML=userTemplate;
        }
        window.getUsers = getUsers;
        getUsers();
    }
    
}

window.inject = inject;


function deleteUser(id){
    axios.delete('/users/remove/'+id,{

    }).then(function (response) {
        alert(response.data)
        inject('admin')
      })
      .catch(function (error) {
        console.log(error);
      })
}

window.deleteUser = deleteUser;

// to find current location based on hash and inject it to root div
var currLocation = window.location.href.split('#')[1];
inject(currLocation);

// // to handel back and before location
// window.onhashchange = console.log(currLocation);



    


hideBtns();

// Funtion return user id when he is logged in 
// it used to add post with publisher name 

function getLocal(){
    return localStorage.getItem('userId');
}
window.getLocal = getLocal;
export {getLocal};




// function to clean localStorage

function logout(){
    window.localStorage.clear();
    window.location.href = "/"
}
window.logout = logout;
 


// hideBtns to hide somme buttons depend on location 

function hideBtns(){
    const storage = localStorage.getItem('userId');
    const logDiv = document.querySelector('#loginBtn');
    const toReplace = document.querySelector('#Signup')
    if(storage){
        const loginBtn = `<button  onclick="logout()" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
        <!-- Heroicons - Login Solid -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span>Logout</span>`;
        
        toReplace.setAttribute('onclick',"inject('add')")
        toReplace.innerHTML="AJOUTER UN ARTICLE"
        logDiv.innerHTML=loginBtn;
    }
}
window.hideBtns = hideBtns;


// login function to verify user information and store 
// local userID 

function getIn(){
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    axios.post('/login', {
        "email":email,
        "password":password
    })
.then(function (response) {
    console.log(response)
    if(response.data.id){
        localStorage.setItem('userId',response.data.id.id);
        const userId = localStorage.getItem('userId');
        if(userId){
            if(response.data.id.role == 'ADMIN'){
                inject('admin');
                
            }
                else{
                    alertBox.innerHTML=`<div class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert">
            <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div>
                <span class="font-medium">Welcome ${response.data.id.name}
        </div>`
            inject('home')  
                }
        }
        hideBtns();
    }else{
        alertBox.innerHTML  = `<div class="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700" role="alert">
        <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div>
            <span class="font-medium">${response.data.error}</span> Change a few things up and try submitting again.
        </div>
    </div>`
    } 
})
.catch(function (error) {
    console.log(error);
}); 
}
window.getIn = getIn;

function singUp(){
    const name =  document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    axios.post('users/add', {
        "name":name,
        "email":email,
        "password":password
    })
    .then(function (response) {
        alertBox.innerHTML  = `<div class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert">
        <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div>
            <span class="font-medium">Your Registred go to login
        </div>`;
    })
    .catch(function (error) {
        console.log(error);
    });
}


window.singUp = singUp



