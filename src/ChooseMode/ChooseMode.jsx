import React, { useState, useEffect } from "react";
import './chooseMode.css'

const ChooseMode = ({ mode, setMode, handleChange, handleSubmit }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const url = 'https://demo7919674.mockable.io/';

    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    if (error) {
      return <div>Помилка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Завантаження...</div>;
    } else {
      return (
        <form onSubmit={handleSubmit} className='modeForm'>
          <select value={mode} onChange={handleChange} className='modeSelect'>
            {mode === 0 ? <option>Pick mode</option> : <></>}
            {items.map(item => (
              <option key={`${item.field}${item.name}`} value={item.field}>
                {item.name}
              </option>
            ))}
          </select>
          <button 
            type="submit" 
            value="START" 
            className="submitButton"
          >
            START
          </button>
        </form>
      );
    }
  }

export default ChooseMode;