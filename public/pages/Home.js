
async function getHome(){
    var container = `<section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
    <div class="container">
       <div class="flex flex-wrap justify-center -mx-4">
          <div class="w-full px-4">
             <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <h2
                   class="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark
   mb-4
                   "
                   >
                   Les Articles Plus Recent
                </h2>
             </div>
          </div>
       </div>
       <div class="flex flex-wrap -mx-4">
    `;
    const BlogsUrl = '/api/blogs';
    const LabelsUrl = '/label/all';
    const noLabel = "NO LABEL";
    // fecth all articles
    const blog = await fetch(BlogsUrl);
    const Blogs = await blog.json();
    Blogs.reverse(); // pour affichher les articles les plus recents aux tete de la page
   Blogs.forEach(element => {
                 const Blog = `
                 <div id="${element.id}" class="w-full md:w-1/2 lg:w-1/3 px-4">
                 <div class="p-5 border border-gray-150 max-w-[370px] mx-auto mb-10">
                    <div class="rounded overflow-hidden mb-8">
                       <img onclick="inject('preview?id=${element.id}')"
                       src="${element.imgUrl?"/img/"+element.imgUrl:"/"}"
                       alt="${element.title}" 
                          class="cursor-pointer w-full h-60 hover:scale-150 duration-300"
                          />
                    </div>
                    <div>
                       <span onclick="inject('label?id=${element.label.id}')"
                          class="
                          cursor-pointer
                          bg-primary
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
                          <a onclick="inject('label?id=${element.label.id}')">${element.label?element.label.name:noLabel}</a>
                       </span>
                       <h3 class="cursor-pointer" onclick="inject('preview?id=${element.id}')">
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
             
                 container+=Blog;
                 
             });
    container+= `
                        </div>
                    </div>
                </section>
                `
    return container;
 }
 getHome();
export const Home = await getHome();







