import { useState } from 'react';
import './App.css';
import Cell from './Cell/Cell';
import ChooseMode from './ChooseMode/ChooseMode';
import Сoordinates from './Сoordinates/Сoordinates'

function App() {

  let [mode, setMode] = useState(0);
  let [matrixMode, setMatrixMode] = useState(0);

  const handleChange = (event) => {
    setMode(mode = event.target.value)
  }

  const handleSubmit = (event) => {
    setMatrixMode(matrixMode = +mode);
    setCoordinate(coordinate = []);
    event.preventDefault();
  }

  function createArray(length, callback) {
    return [...new Array(length)].map(callback)
  };
  let matrix = createArray(matrixMode, () => createArray(matrixMode, () => matrixMode));


  let [coordinate, setCoordinate] = useState([])
  function onCoordinate(y, x) {
    setCoordinate(coordinate.concat([{
      row: x+1, 
      col: y+1
    }]))
    if (coordinate.length > 4){
      setCoordinate(coordinate.slice(-4))
    }
  };

  return (
    <div className="App">
      <div className="fieldWrapper">

        <ChooseMode 
          mode={mode} 
          setMode={setMode} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
        />

        <div className="cellField">
          <div>
            {matrix.map((line, lineNumber)=>
              (
                <div className="line" key={lineNumber}>
                  {line.map((v, i) => (
                    <Cell 
                      key={`${lineNumber}${i}`} 
                      value={v} 
                      x={i} 
                      y={lineNumber} 
                      handleClick={onCoordinate}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>

        
      </div>
      <Сoordinates coordinate={coordinate}/>
    </div>
  );
}

export default App;