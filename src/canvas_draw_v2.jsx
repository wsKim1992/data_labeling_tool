import React,{useEffect,useState,useRef,useReducer} from 'react';
import Tool from './tools/Tool';
//import Addi_Compo from './additional_components/addi_compo'

function penReducer(state,action){
    console.log(action.action_type)
    switch(action.action_type){
        case 'change_color':{
            return{...state,color:action.value}
        }
        case 'change_lineWidth':{
            return{...state,lineWidth:action.value}
        }
    }
}

const Canvas_frame = ()=>{
    let pen_init = {color:'black',lineWidth:2.5};
    const canvasRef = useRef(null);//refers dom Element
    //const [ctx,setCtx]=useState(null);
    const [pen,dispatch]=useReducer(penReducer,pen_init);
    const [isDrawing,setIsDrawing] = useState(false);
    const imgArr = [
        ['red','orange'],['yellow','green'],['blue','lightblue'],
        ['black','white'],['pencil','line'],['circle','filledcircle'],
        ['ellipse','filledsquare'],['rect','filledrect'],['triangle','filledtriangle']
    ]

    /* useEffect(()=>{
        const context = canvasRef.current.getContext('2d');
        context.strokeStyle = 'black';
        context.lineWidth = 2.5;
        setCtx(context);
    },[]) */

    useEffect(()=>{
        console.log(pen);
        canvasRef.current.getContext('2d').strokeStyle=pen.color;
        canvasRef.current.getContext('2d').lineWidth=pen.lineWidth;
    },[pen]);

    const startDrawing = ()=>{
        setIsDrawing(true);
    }

    const finishDrawing = ()=>{
        const ctx = canvasRef.current.getContext('2d');
        ctx.closePath();
        setIsDrawing(false);
    }

    const drawing = ({nativeEvent})=>{
        const ctx = canvasRef.current.getContext('2d');
        const {offsetX,offsetY} = nativeEvent;
        if(ctx){
            if(!isDrawing){
                ctx.beginPath();
                ctx.moveTo(offsetX,offsetY);
            }else{
                ctx.lineTo(offsetX,offsetY);
                ctx.stroke();
            }
        }
    }

    return(
        <div className="jb_table">
            <div className="row">
                <span className="cell" width="82">
                    <div>
                        <div className="jb_table">
                        {
                            imgArr.map((imgNameArr,idx)=>(
                                <Tool dispatch={dispatch} type={idx>=4 ?'tool':'color'} imgNameArr={imgNameArr} key={idx} />
                            ))
                        }   
                        </div>
                    </div>
                </span>
                <span className="cell">
                    <div>
                        <canvas
                            onMouseDown={startDrawing}
                            onMouseUp={finishDrawing} 
                            onMouseMove={drawing}
                            onMouseLeave={finishDrawing}
                            ref={canvasRef} 
                            id="canvas" width="1020px" height="820px">

                        </canvas>
                    </div>
                </span>
                {/* <span className="cell">
                    <Addi_Compo />       
                </span> */}
            </div>
        </div>
    )
}

export default Canvas_frame;