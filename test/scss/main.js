import './draw.scss';
import './slider.scss';
import './toolbar.scss';
import './datalabel.scss';

window.onload=()=>{
    let btn_color = document.querySelectorAll('.btn-color');
    Array.from(btn_color).forEach((color_li)=>{
        const data_color = color_li.getAttribute('data-color')
        console.log(data_color);
        color_li.style.backgroundColor=data_color;
    })

}