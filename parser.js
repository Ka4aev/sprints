const formCreate = document.getElementById('formCreate');
const nameForm = document.getElementById('nameForm');

let fileURL;
let data;

// input.setAttribute('placeholder', if(!item.input.placeholder){ item.input.placeholder} else{ " "});
let createFields = (data, form) =>{

    data.fields.forEach((item) => {
        let block = document.createElement('div');
        block.setAttribute('style', 'display: flex; flex-direction: column');
        let label = document.createElement('label');
        label.innerHTML = item.label ? item.label : '';
        block.appendChild(label);
        let input = document.createElement('input');
        input.setAttribute('placeholder', (item.input.placeholder) ? item.input.placeholder : ' ');
        input.setAttribute('type', item.input.type);
        input.setAttribute('required', item.input.required);
        // input.setAttribute('placeholder', item.input.mask);
        // input.setAttribute('multiple', item.input.multiple);
        // input.setAttribute('filetype', item.input.filetype);

        input.innerHTML = item.input;
        block.appendChild(input);
        form.appendChild(block);

        // if (data.name === "interview"){
        //     input.setAttribute('placeholder', '');
        // }
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