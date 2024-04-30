const formCreate = document.getElementById('formCreate');
const nameForm = document.getElementById('nameForm');
const clearForms = document.getElementById('clear-form');

let fileURL;
let data;

const clearForm = () => {
    formCreate.innerHTML = '';
    formCreate.setAttribute('style', 'display:none');
    nameForm.innerHTML = '';
    clearForms.setAttribute('style', 'display: none;');
}

// todo сделать чекбокс
let createFields = (data,form) => {
    data.fields.forEach((item) => {
        let block = document.createElement('div');
        block.setAttribute('style', 'display: flex; flex-direction: column');

        let label = document.createElement('label');
        label.innerHTML = item.label ?? null;
        block.appendChild(label);

        let input = document.createElement('input');
        input.setAttribute('class', 'form-control ');
        item.input.type === "checkbox"
            ?  input.setAttribute('class', 'form-check-input ')
            : input.setAttribute('class', 'form-control ');

        let technology = item.input.type === "technology";
        let technologies = item.input.technologies ?? null;

        let technologyFunc = () =>{
            let select = document.createElement('select');
            select.setAttribute('multiple', 'multiple');
            select.setAttribute('class', 'form-select');
            select.setAttribute('size', technologies.length);


            technologies ? (technologies.forEach((item) =>{
                let option = document.createElement('option');
                select.appendChild(option);
                option.innerHTML = item;
                console.log(item);
            })) : '';
            block.appendChild(select);
        }


        let color = item.input.type === "color";
        let colorsFunc = () =>{
            let colors = item.input.colors ?? null;
            let blockcolor = document.createElement('form');
            blockcolor.setAttribute('style', 'display: flex; flex-direction: column; height: fit-content; gap:15px;margin:20px auto;align-items:center;');
            colors ? (colors.forEach((item) =>{
                let colorblock = document.createElement('div');
                colorblock.setAttribute('width','100%');
                colorblock.setAttribute('style', `background-color: ${item}; height: 100px; width:300px;`);
                blockcolor.appendChild(colorblock);
                let input = document.createElement('input');
                input.setAttribute('type', 'radio');
                input.setAttribute('name', 'color;');
                input.setAttribute('class', 'form-check-input');
                blockcolor.appendChild(input);
                console.log(item);
            })) : '';

            block.appendChild(blockcolor);
        }

        let deffault = () =>{
            if (color || technology) return;
            input.setAttribute('type', item.input.type)
            block.appendChild(input);
        }

        for (const [attr, attrValue] of Object.entries(item.input)) {
            input.setAttribute(attr, attrValue);
            console.log(attr, attrValue, '\n\n');

            let filetype = item.input.filetype ?? null;
            filetype ? input.setAttribute('accept', filetype.map(item => '.' + item).join(',')) : null;

            let placeholder = item.input.placeholder ?? item.input.mask ?? null;
            placeholder ? input.setAttribute('placeholder', placeholder) : null;

            switch (attr){
                case 'technologies': technologyFunc();break;
                case 'colors': colorsFunc();break;
                default: deffault();
            }
        }

        form.appendChild(block);
    })
}
let createReferences =(data,form) => {
    data.references.forEach((item) => {
        let block = document.createElement('div');
        block.setAttribute('style', 'display: flex; flex-direction: column');

        // let blockinput = document.createElement('div');
        // blockinput.setAttribute('style', 'display: flex;');

        let input = document.createElement('input');


        let textblock = document.createElement('span');
        textblock.setAttribute('style', 'display: flex;gap:5px;margin:0 auto;');

        let textWithoutRef = () => {
            let textwithout = document.createElement('p');
            textwithout.innerHTML = item['text without ref'] ?? null;
            textblock.appendChild(textwithout);
        }
        let href = item.ref;
        let textDefault = () => {
            let textDef = document.createElement('a');
            textDef.setAttribute('href', href);
            textDef.setAttribute('target', '_blank');
            textDef.setAttribute('class', 'link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover');
            textDef.innerHTML = item.text ?? null;
            textblock.appendChild(textDef);
        }

        block.appendChild(textblock);
        let inputFunc = () => {

            for (const [attr, attrValue] of Object.entries(item.input)) {
                input.setAttribute(attr, attrValue);
                item.input.type === "checkbox" ? input.setAttribute('class', 'form-check-input ') : input.setAttribute('class', 'form-control ');
                input.setAttribute('style', 'margin: 0 auto');
                block.appendChild(input);
            }
        }
        for (const [attr] of Object.entries(item)) {
            switch (attr) {
                case 'input':
                    inputFunc();
                    break;
                case 'text without ref':
                    textWithoutRef();
                    break;
                case 'text':
                    textDefault();
                    break;
            }
        }
        form.appendChild(block);

    })
}
let createButtons = (data,form) => {

    data.buttons.forEach((item) => {
        let btn = document.createElement('button');
        btn.innerHTML = item.text;
        item.text === "Cancel"
            ? btn.setAttribute('class', 'btn btn-danger')
            : btn.setAttribute('class', 'btn btn-secondary');

        form.appendChild(btn);
    })
}
let createFile = (data, form) =>{

    formCreate.setAttribute('style', 'display: inherit; margin-bottom: 30px;');

    data.fields ? createFields(data,form) : null;
    data.references ? createReferences(data,form) : null;
    data.buttons ? createButtons(data,form) : null;
}

async function showFile(input) {
    clearForms.setAttribute('style', 'display: inherit;');
    let file = input.files[0];
    file ? formCreate.innerHTML = '' : null;
    fileURL = URL.createObjectURL(file);
    let response = await fetch(fileURL);
    data = await response.json();
    console.log(data);
    nameForm.innerHTML = data.name;


    createFile(data, formCreate);
}