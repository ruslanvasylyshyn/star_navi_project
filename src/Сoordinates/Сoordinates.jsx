import React from "react";
import './coordinates.css';

const Сoordinates = ({ coordinate }) => {

    return(
        <div className="coordinates">
            <h1 className="coordinatesHeader">Hover squares</h1>
                {coordinate.map((item, id) => {
                    return(
                        <div className='coordinatesPopUp' key={id}>
                            <div className="coordinatesContent">
                            <span>row</span> {item.row}
                            <span>col</span> {item.col}
                        </div>
                    </div>
                    )
                })}

        </div>
        
    )
}

export default Сoordinates;