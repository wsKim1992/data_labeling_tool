import React from "react";
import {render} from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCamera,faDrawPolygon,faEraser,faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const FontIcon = ()=>{
    return(
    <div>
        <FontAwesomeIcon icon={faCamera} size="2x"/>
        <FontAwesomeIcon icon={faSquare} size="2x"/>
        <FontAwesomeIcon icon={faDrawPolygon} size="2x"/>
        <FontAwesomeIcon icon={faEraser} size="2x"/>
        <FontAwesomeIcon icon={faPencilAlt} size="2x"/>
    </div>)
}

export default FontIcon;