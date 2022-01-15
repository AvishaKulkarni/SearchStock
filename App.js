import {useState, useEffect}  from "react";
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {

    //using random GET API 
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => setData(response.data));},[]);

  const searchStock = (e) => {
    data.map((item) => {return(item.id);})
    setData(e.target.value);

  } 
    
  return (
    <>

      
      <form>

        <label> Search Stock : 
        <input type = "text" placeholder = "Enter Stock" value = {data}/>
        </label>
        <button onClick={searchStock}>Search</button>

      </form>
      {/* mapping the data inside it or accessing the data inside it in an unordered list */}
      {/* <ul>
        {data.map((item) => (key ={item.id}>{item.body}))}
      </ul> */}
    </>
  );
}

export default App;
