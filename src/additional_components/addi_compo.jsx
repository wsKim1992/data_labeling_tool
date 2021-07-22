import React,{useState,useEffect} from 'react';

const Addi_Compo=()=>{
    
    return(
        <React.Fragment>
            <input type="file" id="load_filename" />
            <div>Title<input id="title" size="15" /></div>
            <div>
                <a id="saveImage">
                    <input type="button" value="Save"  />
                </a>
                <input type="button" value="Clear" />
                <input type="button" value="History"  />
            </div>
            <div>
                <input type="button" value="save as json" />
                <input type="button" value="save as Txt"  />
            </div>
            <div>
                <textarea id="history" cols="40" rows="37" style="display: none;"></textarea>
            </div>
            <div id="command">
            </div>
                <input type="button" value="Redraw"  />
            <div></div>
        </React.Fragment>
    )
}

export default Addi_Compo;