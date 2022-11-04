import React from 'react'
import '../styles/App.css';
const App = () => {
  
  let time = new Date().toLocaleTimeString();
  const [ctime,setCtime]=useState();

  const UpdateTime = () => {
time =new Date().toLocaleTimeString();
setCtime(time);
  };

  setInterval(UpdateTime,1000);

  return (
    <div id="main">
      <div className="date-time">
    
    <h1>{ctime}</h1>
<button onClick={UpdateTime}>get time</button>

    </div>
    </div>
  )
}


export default App;
