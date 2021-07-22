import React from 'react';
import Tool_data from './tool_data';

const Tool_row = ({tool_ele})=>{

    return(
        <tr style={{ 
            display:"block", 
            width:"45px",
            height:"45px"}}>
            <Tool_data  tool={tool_ele} />
        </tr>
    )
}

export default Tool_row;