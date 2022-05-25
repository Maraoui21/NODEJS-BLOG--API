export async function newArticle(){
    const LabelsUrl = '/label/all';
    // fetch all labels
    const label = await fetch(LabelsUrl);
    const Labels = await label.json();  
    var options = `<select name="Label" id="label">`;
    Labels.forEach(element => {
        options+=`<option value="${element.id}">${element.name}</option>`;
    });
    options+=`</select>`;
    const Add = `<div class="centre">
<form id="article" action="/api/blogs" method="POST" enctype="multipart/form-data">
    <label for="title">TITRE</label>
    <input type="text" id="title" name="title">
    <label for="imgUrl">IMAGE</label>
    <input type="file" id="imgUrl" name="imgUrl">
    <label for="content">CONTENU DE L'ARTICLE</label>
    <textarea type="text" id="content" name="content"></textarea>
        ${options}
    <input id="send-btn" type="submit" value="POSTER L'ARTICLE">
</form>
</div>`
    return Add;
}

const AddArticle = await newArticle();
export {AddArticle};
