import './draw.scss';
import './slider.scss';
import './toolbar.scss';
import './datalabel.scss';


const addClassListArea = document.querySelector("#classListArea tbody .class-list");
const addNewClassBtn = document.querySelector('#classListArea tbody .confirm');
const tfoot = document.querySelector("#classListArea tfoot");
const tfootClassList =document.querySelectorAll('#classListArea tfoot .class-list');
const tfootClassListTemplate = tfootClassList[0];
const dataLabelArea = document.querySelectorAll("#dataLabelArea tbody .data-label");

const removeClassList = function(e){
    const element = this.closest('.class-list');
    const id = element.querySelector('.class-name-wrap>span').innerText;
    console.log(`id : ${id}`);
    document.querySelector("#classListArea tfoot").removeChild(element);
    Array.from(dataLabelArea).forEach((cla)=>{
        console.log(cla);
        const select = cla.querySelectorAll('.select-wrap')[0].querySelectorAll('.select')[0];
        console.log(select);
        const optionsToDelete = select.querySelector(`#${id}`);
        console.log(optionsToDelete);
        select.removeChild(optionsToDelete);
    })
}

const reconfirmClass=function(event){
    const parentClassList = this.closest('.class-list');
    const mode = parentClassList.getAttribute('mode');
    console.log(`mode : ${mode}`);
    console.log(parentClassList);
    const classNameWrap = parentClassList.querySelectorAll('.class-name-wrap')[0];
    const classNameWrapSpan = classNameWrap.querySelectorAll('span')[0];
    const className = classNameWrapSpan.innerText;
    
    if(mode==="normal"){
        parentClassList.setAttribute('mode','modify');
        
        classNameWrapSpan.style.display='none';

        let input = document.createElement('input');
        input.style.display = 'block';
        input.style.width = '100px';
        input.style.height = '45px';  
        input.value = className;

        classNameWrap.appendChild(input);
    }else{
        parentClassList.setAttribute('mode','normal');
        const input = classNameWrap.querySelector('input');
        const input_value = input.value;
        input.remove();
        classNameWrapSpan.style.display='block';
        classNameWrapSpan.innerText=input_value;

    }
}

window.onload=()=>{
    let btn_color = document.querySelectorAll('.btn-color');
    Array.from(btn_color).forEach((color_li)=>{
        const data_color = color_li.getAttribute('data-color')
        console.log(data_color);
        color_li.style.backgroundColor=data_color;
    })
    
    Array.from(tfootClassList).forEach((element)=>{
        let trashCan = element.querySelectorAll('.trash-can')[0]
        let confirm = element.querySelectorAll('.confirm')[0]
        trashCan.querySelectorAll('i')[0].addEventListener('click',removeClassList)
        confirm.querySelectorAll('i')[0].addEventListener('click',reconfirmClass);
    })

    addNewClassBtn.addEventListener('click',(event)=>{
        const className =  addClassListArea.getElementsByClassName('class_name')[0].value;
        const color = addClassListArea.getElementsByClassName('color')[0].value;
        console.log(`className : ${className}`);
        console.log(`color : ${color}`);
        const classListNode = tfootClassListTemplate.cloneNode(true);
        classListNode.setAttribute('mode','normal');
        classListNode.querySelectorAll('.class-name-wrap>span')[0].innerText=className;
        classListNode.querySelectorAll('.select-color>.color>i')[0].style.color = color;
        classListNode.querySelectorAll('.trash-can>i')[0].addEventListener('click',removeClassList);
        classListNode.querySelectorAll('.confirm>i')[0].addEventListener('click',reconfirmClass);
        tfoot.appendChild(classListNode);

        let newOption = document.createElement('option');
        newOption.value=className;
        newOption.id = className;
        newOption.innerText = className;

        Array.from(dataLabelArea).forEach(dla=>{
            console.log(dla);
            dla.querySelectorAll('.select-wrap')[0].querySelectorAll('.select')[0].appendChild(newOption);
        })
    });
}


