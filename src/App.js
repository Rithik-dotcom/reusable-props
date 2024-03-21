import { useEffect, useState } from 'react';
import './App.css';
import Movies from './components/Movies/Movies';

function App() {
  var [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json))
    console.log(data)
  }, [])

  console.log(data)


  return (
    <div className="App">
      <form className="search" >
        <input type="search" value="" placeholder="Search for Product Title …" />
      </form>


      
      <Movies movies={data} />
    </div>
  );
}

export default App;
