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

        let colors = item.input.colors ?? null;
        let blockcolor = document.createElement('form');
        blockcolor.setAttribute('style', 'display: flex; flex-direction: column; height: fit-content; gap:15px;');
        colors ? (colors.forEach((item) =>{
            let colorblock = document.createElement('div');
            colorblock.setAttribute('width','100%');
            colorblock.setAttribute('style', `background-color: ${item}; height: 100px;`);
            blockcolor.appendChild(colorblock);
            let input = document.createElement('input');
            input.setAttribute('type', 'radio');
            input.setAttribute('name', 'color;');
            blockcolor.appendChild(input);
            console.log(item);
        })) : '';



        for (const [attr, attrValue] of Object.entries(item.input)) {
            input.setAttribute(attr, attrValue);
            console.log(attr, attrValue, '\n\n');

            let filetype = item.input.filetype ?? null;
            filetype ? input.setAttribute('accept', filetype.map(item => '.' + item).join(',')) : null;

            let placeholder = item.input.placeholder ?? item.input.mask ?? null;
            placeholder ? input.setAttribute('placeholder', placeholder) : null;

            let technology = item.input.type === "technology";

            !technology ? input.setAttribute('type', item.input.type) :  null;
            !technology ? block.appendChild(input) : block.appendChild(select);

            let color = item.input.type === "color";
            !color ? input.setAttribute('type', item.input.type) : null;
            !color ? block.appendChild(input) : block.appendChild(blockcolor);

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