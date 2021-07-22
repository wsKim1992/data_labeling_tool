import React,{memo,useEffect,useState,useRef} from 'react';

const Tool=memo(({dispatch,imgNameArr,type})=>{

    const onClickImg = (val)=>{
        console.log(type);
        if(type==='color'){
            dispatch({action_type:'change_color',value:val})
        }
    }
    
    return(
        <div className="row">
            <span className="cell">
                {
                    imgNameArr.map((imgName,idx)=>{
                        return <img value={imgName} onClick={(e)=>{onClickImg(imgName)}} type={type} key={idx} src={`img/${imgName}.png`} />
                    })
                }           
            </span>
        </div>
    )
})

export default Tool;