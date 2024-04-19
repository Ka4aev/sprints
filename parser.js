const formCreate = document.getElementById('formCreate');
const nameForm = document.getElementById('nameForm');
const FileSelector = document.getElementById('file-selector');

let fileURL;
let data;


let createFields = (data, form) =>{

    formCreate.setAttribute('style', 'display: inherit');
    data.fields.forEach((item) => {

        let block = document.createElement('div');


        block.setAttribute('style', 'display: flex; flex-direction: column');
        let label = document.createElement('label');
        label.innerHTML = item.label ?? null;
        block.appendChild(label);
        let input = document.createElement('input');

        let select = document.createElement('select');
        select.setAttribute('multiple', 'multiple')

        let technologies = item.input.technologies ?? null;
        technologies ? (technologies.forEach((item) =>{
            let option = document.createElement('option');
            select.appendChild(option);
            option.innerHTML = item;
            console.log(item);
        })) : '';


        for (const [attr, attrValue] of Object.entries(item.input)) {
            input.setAttribute(attr, attrValue);
            console.log(attr, attrValue, '\n\n');

            let placeholder = item.input.placeholder ?? item.input.mask ?? null;
            placeholder ? input.setAttribute('placeholder', placeholder) : null;

            let filetype = item.input.filetype ?? null;
            filetype ? input.setAttribute('accept', filetype.map(item => '.' + item).join(',')) : null;

            let technology = item.input.type === "technology";
            !technology ? input.setAttribute('type', item.input.type) : null;

            !technology ? block.appendChild(input) : block.appendChild(select);
        }

        input.innerHTML = item.input;
        form.appendChild(block);
    })

}
async function showFile(input) {
    let file = input.files[0];
    fileURL = URL.createObjectURL(file);
    let response = await fetch(fileURL);
    data = await response.json();
    console.log(data);
    nameForm.innerHTML = data.name;
    // title.setAttribute('style', 'color: red;')
    // data.buttons.forEach((item) => {
    //     let btn = document.createElement('button')
    //     btn.innerHTML = item.text;
    //     formCreate.appendChild(btn);
    // })

    createFields(data, formCreate);


}