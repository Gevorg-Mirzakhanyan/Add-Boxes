import React, { useState } from 'react';
import './Boxes.css'

function Boxes() {
  const [boxes, setBoxes] = useState([]); 

  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color  
  };

  const addBoxes = () => {
    const newBox = { color: randomColor() };
    setBoxes([...boxes, newBox]);
  };

  const removeBoxes = (index) => {
    const newBoxes = [...boxes];
    newBoxes.splice(index, 1);
    setBoxes(newBoxes);
  };

  return (
    <div>
      <button onClick={addBoxes}>Add Box</button>
      <div>
        {boxes.map((box, index) => (
            <div>
                <div
                    className="boxColor"
                    style={{ backgroundColor: box.color }}> 
                    <button onClick={() => removeBoxes(index)}>X</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Boxes;
