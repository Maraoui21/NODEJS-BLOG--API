import { Home } from "./Home.js";
import { AddArticle } from "./AddArticle.js";
const root = window.document.querySelector('#root');
const tmp = {
             'home': Home,
             'add':AddArticle,
             'login':`<h2>LOGIN<h2>`
            }
function inject(location){ 
    root.innerHTML = tmp[location]
}
window.inject = inject;

