const unique = `
                    <div class="m-10 px-10 bg-gray-50 py-6 rounded-lg shadow-sm">
                    <div class="flex justify-between items-center">
                        <span id="date" class="px-2 py-1 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl font-light text-white flex items-center"></span>
                    </div>
                    <div class="mt-2">
                        <h2 id='title' class="p-5 text-2xl text-gray-700 font-bold hover:text-gray-600" href="#"></h2>
                        <div id="thumbnail" class="xl:w-2/4 xl:h-2/4 w-full xl:p-10 m-auto">
                        </div>
                        <p id='content' class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                    </div>
                            <a class="flex justify-between mt-10" href="#">
                                <h1 id="author" class="text-gray-700 font-bold"></h1>
                                <h1  class="text-gray-700 font-bold">Label:  <span id="Label" class="px-2 py-1 bg-indigo-500 hover:bg-indigo-600 font-bold rounded text-white"></span></h1>
                            </a>
                        </div>
                    </div>
                    <div id="comments" class="m-10 px-10 bg-gray-50 py-6 rounded-lg shadow-sm">
                    <div>
                    <section class="rounded-b-lg  mt-4 ">
                      
                <form action="/add/comment" accept-charset="UTF-8" method="post"><input type="hidden" >
                  <input name="articleId" type="hidden" vlaue=""/>
                  <textarea name="content" class="w-full shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-2xl" placeholder="Add your comment here" cols="6" rows="6" id="comment_content" spellcheck="false"></textarea>
                  <button class="font-bold py-2 px-4 w-full bg-purple-400 text-lg text-white shadow-md rounded-lg ">Comment </button>
                </form>
                
                      <div id="task-comments" class="pt-4">
                        <!--     comment-->
                <div  iv class="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                  <div class="flex flex-row justify-center mr-2">
                    <img alt="avatar" width="48" height="48" class="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png">
                    <h3 class="text-purple-600 font-semibold text-lg text-center md:text-left ">@Shanel</h3>
                  </div>
                
                
                    <p style="width: 90%" class="text-gray-600 text-lg text-center md:text-left ">Hi good morning will it be the entire house. </p>
                
                </div>
                <!--  comment end-->
                      </div>
                    </section>
                
                  </div>                    </div>
                    </div>
                `;



      
export {unique};   