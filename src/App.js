import React, { useState } from "react";
import Input from "./Input";

function App() {
  const [names, setNames] = useState([]);
  const [status, setStatus] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleButtonClick = () => {
    setStatus(!status);
    setButtonVisible(false); // Hide the button when clicked
  };

  return (
    <div>
      <h1 className="text-center heading-title">Todo list</h1>
      <div className="button-container text-center">
        {buttonVisible && ( // Render button only if it's visible
          <button className="task-btn btn-lg m-5" onClick={handleButtonClick}>
            Add task
          </button>
        )}
      </div>
      {status && <Input names={names} setNames={setNames} />}
    </div>
  );
}

export default App;
