
async function getHome(){
    var container = `<div class="container">
    <div class="articles"> 
    `;
    const BlogsUrl = '/api/blogs';
    const LabelsUrl = '/label/all';
    const noLabel = "NO LABEL";
    // fecth all articles
    const blog = await fetch(BlogsUrl);
    const Blogs = await blog.json();
    Blogs.reverse(); // pour affichher les articles les plus recents aux tete de la page
    // fetch all labels
    const label = await fetch(LabelsUrl);
    const Labels = await label.json();  
    Blogs.forEach(element => {
                 const Blog = 
                 ` 
                     <div class="card">
                         <img src="${element.imgUrl?"/img/"+element.imgUrl:"/"}" alt="${element.title}" class="thumbnail" />
                         <span class="details">
                             <div class="title"><a href="?:${element.id}">${element.title}</a></div>
                             <p class="content">${element.content}</p>
                             <div class="label">
                             <a href="${element.label?"/Label/"+element.label.id:"/"}" id="labLink">${element.label?element.label.name:noLabel}</a>
                             </div>   
                         </span>
                     </div> 
                 `;
             
                 container+=Blog;
                 
             });
     container+=`</div>
                 </div>`;
    return container;
 }
export const Home = await getHome();
