import React from 'react';

const Color_data=({color})=>{

    return(
        <td style={{width:"40px", height:"40px",margin:"2.5px auto"}} tool={"color"}>
            <img style={{width:"40px", 
                height:"40px", 
                display:"block",
                borderRadius:"5px"}} src={color} />
        </td>
    )
}

export default Color_data;