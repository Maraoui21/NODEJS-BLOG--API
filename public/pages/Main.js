import { Home } from "./Home.js";
import { AddArticle } from "./AddArticle.js";
import { loginPage } from "./Login.js";
import { sres } from "./Signup.js";
const root = window.document.querySelector('#root');
const tmp = {
             'home': Home,
             'add':AddArticle,
             'login':loginPage,
             'signup': sres
            }

function inject(location){ 
    if(location == 'add' && getLocal() == undefined){
        const warning = `<div class="p-20 flex bg-yellow-100 rounded-lg p-4 m-70 text-sm text-yellow-700" role="alert">
        <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div>
            <span class="font-medium">Warning alert!</span> You dont have permission please login.
        </div>
    </div>`;
        root.innerHTML = warning;
    }else{
        if(location==undefined)location='home';
        window.location.hash = location;
        root.innerHTML = tmp[location]
    }
    

}
window.inject = inject;

    const currLocation = window.location.href.split('#')[1];
    inject(currLocation);

    hideBtns();

function getLocal(){
    return localStorage.getItem('userId');
}
window.getLocal = getLocal;
export {getLocal};

function logout(){
    window.localStorage.clear();
    window.location.href = "/"
}
window.logout = logout;
 
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



function getIn(){
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    axios.post('/login', {
        "email":email,
        "password":password
    })
.then(function (response) {
    localStorage.setItem('userId',response.data.id);
    const userId = localStorage.getItem('userId');
    if(userId){
        inject('home')
    }
    else{
        alert('password or email is incorrect')
    }
    hideBtns();
})
.catch(function (error) {
    console.log(error);
}); 
}
window.getIn = getIn;





