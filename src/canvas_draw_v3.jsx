import React, {useState,useEffect,useReducer} from 'react';
import Color_row from './color_component/color_row';
import Tool_row from './tool_component/tool_row';
import Label_row from './label_component/label_row';
import { faDrawPolygon,faEraser,faEyeDropper,faImage,faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Canvas_frame = ()=>{

    const color_list = ['./src/img/red.png','./src/img/blue.png','./src/img/orange.png'
        ,'./src/img/yellow.png','./src/img/white.png','./src/img/black.png'];
    const tool_list = [
        {tool:'eraser',font:faEraser},
        {tool:'pencil',font:faPencilAlt},
        {tool:'polygon',font:faDrawPolygon},
        {tool:'upload',font:faImage},
        {tool:'colorPicker',font:faEyeDropper}];
    
    return(
        <div id="entire_wrap" style={{width:"1600px", height:"970px", overflow:"hidden"}}>
            <div id="whiteboard_tool_con" style={{width:"45px", height:"961px", float:"left" , border:"1px solid #454545"}}>
                <table id="color_con" style={{width:"45px", height:"270px"}}>
                    <tbody >
                        {color_list.map((color,idx)=>(
                            <Color_row style={{display:"block",width:"45px", height:"45px"}} key={idx} color={color} />
                        ))}
                    </tbody>
                </table>

                <table id="drawTool_con" style={{width:"45px", height:"270px"}}>
                    <tbody>
                        {tool_list.map((tool_ele,idx)=>(
                            <Tool_row key={idx} tool_ele={tool_ele} />
                        ))}
                    </tbody>
                </table>
            </div>
            <div id="canvas_con" style={{width:"1222px", height:"961px", float:"left", border:"1px solid #454545"}}>
                <canvas id="canvas" style={{width:"1222px", height:"961px", float:"left"}} ></canvas>
            </div>
            <div id="label_con" style={{width:"292px", height:"961px", float:"left" , border:"1px solid #454545"}}>
                <table id="labelTool_con" style={{width:"292px",height:"961px", overflowY:"scroll"}}>
                    <tbody>
                        <Label_row />
                        <Label_row />
                        <Label_row />
                        <Label_row />
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Canvas_frame;