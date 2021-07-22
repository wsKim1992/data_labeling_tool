import React , {useState,useEffect,useReducer} from 'react';

const Label_row = ()=>{
    return(   
            <tr style={{ display:"block",width:"292px",height:"40px",padding:"0px"}}>
                <td style={{height:"30px",width:"30px"}}>
                    <input style={{margin:"0 auto"}} type="checkbox" className="show"/>
                </td>
                <td style={{height:"30px",width:"130px"}}>
                    <select style={{height:"30px",width:"120px",margin:"0 auto"}} name={"color"}>
                        <option value="#454545">gray</option>
                        <option value="#000000">black</option>
                        <option value="#ffffff">white</option>
                    </select>
                </td>
                <td style={{height:"30px",width:"130px"}}>
                    <select style={{height:"30px",width:"120px",margin:"0 auto"}} name={"category"}>
                        <option value="t-shirt">t-shirt</option>
                        <option value="jean">jean</option>
                        <option value="hand">hand</option>
                    </select>
                </td>
            </tr>
    )
}

export default Label_row;