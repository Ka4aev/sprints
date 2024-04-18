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

        for (const [attr, attrValue] of Object.entries(item.input)) {
            console.log(attr, attrValue, '\n\n');
            input.setAttribute(attr, attrValue);
        }
        // let placeholder = item.input.placeholder ?? item.input.mask ?? null;
        // placeholder ? input.setAttribute('placeholder', placeholder) : null;
        // input.setAttribute('type', item.input.type);
        // input.setAttribute('required', item.input.required);
        // let filetype = item.input.filetype ?? null;
        // filetype ? input.setAttribute('accept', filetype.map(item => '.' + item).join(',')) : null;


        // input.setAttribute('multiple', item.input.multiple);


        input.innerHTML = item.input;
        block.appendChild(input);
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