import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tool_data = (props)=>{
    const tool=props.tool.tool;
    const font = props.tool.font;
    return(
        <td style={{
            display:"block",
            width:"40px" , 
            height:"40px" , 
            margin:"2.5px auto" ,
            lineHeight:"40px",
            fontSize:"25px"}} tool={tool}>
            <FontAwesomeIcon icon={font}/>
        </td>
    )
}

export default Tool_data