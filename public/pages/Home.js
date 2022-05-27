
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
    // fetch all labels
    const label = await fetch(LabelsUrl);
    const Labels = await label.json();
    Blogs.forEach(element => {
                 const Blog = `
                 <div id="${element.id}" class="w-full md:w-1/2 lg:w-1/3 px-4">
                 <div class="p-5 border border-gray-150 max-w-[370px] mx-auto mb-10">
                    <div class="rounded overflow-hidden mb-8">
                       <img
                       src="${element.imgUrl?"/img/"+element.imgUrl:"/"}"
                       alt="${element.title}" 
                          class="w-full"
                          />
                    </div>
                    <div>
                       <span
                          class="
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
                          <a href="${element.label?"/Label/"+element.label.id:"/"}">${element.label?element.label.name:noLabel}</a>
                       </span>
                       <h3>
                          <a
                             href="${"/api/blogs/"+element.id}"
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
                       <p id="content" class="text-base text-body-color">
                       ${element.content}
                       </p>
                    </div>
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
export const Home = await getHome();







