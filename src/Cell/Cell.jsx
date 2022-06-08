import React, { useState } from "react";
import './cell.css'

const Cell = ({ handleClick, value, x, y }) => {
    let [cellColor, setCellColor] = useState(true);
    let [cellValue, setCellValue] = useState(0);
    if (cellValue !== value) {
        setCellColor(cellColor = true);
        setCellValue(cellValue = value);
    }

    return(
        <div 
            className={cellColor ? 'whiteCell' : 'blueCell'}
            onMouseEnter={(e) => {
                handleClick(y, x); 
                setCellColor(!cellColor)
            }} 
        >
        </div>
    )
}

export default Cell;