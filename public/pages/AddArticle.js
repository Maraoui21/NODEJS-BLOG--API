import { getLocal } from "./Main.js";
const user = getLocal();

export async function newArticle(){
    const LabelsUrl = '/label/all';
    // fetch all labels
    const label = await fetch(LabelsUrl);
    const Labels = await label.json();  
    var options = `<select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="labelId" id="labelId">`;
    Labels.forEach(element => {
        options+=`
    <option 
            style="border:0px;outline:0px"
            class="border-none" value="${element.id}">${element.name}
    
    </option>`;
    });
    options+=`</select >`;
    const Add = `<div class="p-8 max-w-2xl mx-auto">
	<form  id='post-form' action="/api/blogs" method="POST" enctype="multipart/form-data">
        <input class="outline-0	 border-0 mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600" type="text" id="title" name="title" placeholder="title"/>
    <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
            <label for="content" class="sr-only">Publish post</label>
            <textarea id="content" name="content" rows="8" class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required></textarea>
        </div>
    </div>
    <div class="mb-4 max-w-2xl mx-auto">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Label</label>
            ${options}
        <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
    </div>
<div class="max-w-2xl mx-auto">
	<div class="flex items-center justify-center w-full">
        <label for="imgUrl" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="imgUrl" name="imgUrl" type="file" class="hidden" />
        </label>
    </div> 
    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
</div>
    <div class="py-8 form-check">
      <input value="${user}" class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="authorId" id="authorId">
      <label class="form-check-label inline-block text-gray-800" for="authorId">
        Post with your name
      </label>
    </div>
    <button type="submit" class="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
        Publish post
    </button>
    </form>
    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
</div>`
    return Add;
}

const AddArticle = await newArticle();
export {AddArticle};
