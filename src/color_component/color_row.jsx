import React, {usetState,useEffect,useReducer} from 'react';
import Color_data from './color_col'

const Color_row = ({color})=>{
    
    return(
        <tr style={{width:"45px", height:"45px", margin:"2.5px auto" }}>
            <Color_data color={color} />
        </tr>
    )

}

export default Color_row;