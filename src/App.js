import React,{useState} from 'react'
import Products from './Products';

const App = () => {
  const [search,setSearch] = useState('');
  const YOUR_APP_ID = "1774ac28";
  const YOUR_APP_KEY = "c854c4826d12f1d5a86cdf80043d5b2b";
  const [data,setData] = useState([]);
  

  const submitHandler = e => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=27&calories=591-722&health=alcohol-free`
    )
      .then(response => response.json())
      .then(data => setData(data.hits))
      .catch(error => console.error('Error fetching data:', error));
  };
  
  return (
    <div>
      <center>
        <h1>Food Recipe App</h1><br/>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/><br/>
          <input type="submit" className='btn btn-primary' value="Search"/><br/>
        </form>
        {data.length >=1 ? <Products data={data}/>:null}
      </center>
    </div>
  );
}

export default App;
