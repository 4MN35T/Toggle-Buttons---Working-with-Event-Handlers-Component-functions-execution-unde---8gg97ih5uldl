import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
  const [btn,setbtn]=useState(false);
  function handleClick(){
    setbtn((pre)=>!pre)
  }

  
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {/* assign value for button 1 */}
      {btn?"ON":"OFF"}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {/* assign value for button 2 */}
        {btn?"OFF":"ON"}
      </button>
    </div>
  );
}


export default App;