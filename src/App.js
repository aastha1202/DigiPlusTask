import logo from './logo.svg';
import './App.css';
import Node from './Node';
import { useState } from 'react';

function App() {

  const [node, setNode]=useState(false)
  const [type, setTreeType] = useState("")
  const tree={
    value: 'Root',
    treeArr:[]
  }
  function handleInput(e){
    setTreeType(e.target.value) 
  }
  function handleAddNode(){
    setNode(true)
    let randomId= Math.random().toString()
   tree.treeArr.push([{ value: type==='Single Node'? type : {id: randomId , type: []} }], ...tree.treeArr)
   
   console.log(tree)
  }
  return (
    <div className="App">
      <h1> DigiPlusIT Task</h1>
      
      <input type= 'text' placeholder='Write Node value here'/>
      <label htmlFor='singleNode'>
      <input id='singleNode' type ='radio' value='Single Node' onChange={(e)=>handleInput(e)}/>
      Single Node
      </label>
      <label htmlFor='parentNode'>
      <input id='parentNode' type ='radio' value='Parent Node' onChange={(e)=>handleInput(e)}/>
      Parent Node
      </label>
      <label htmlFor='childNode'>
      <input id='childNode' type ='radio' value='Child Node' onChange={(e)=>handleInput(e)}/>
        Child Node
      </label>
      <button onClick={handleAddNode}>Add Node</button>
    </div>
  );
}

export default App;
