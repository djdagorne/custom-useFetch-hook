import React from 'react';
import './App.css';
import useFetch from './useFetch'

function App() {
  const res = useFetch("https://dog.ceo/api/breeds/image/random", {});
  console.log(res);
  if(!res.response) {
    return <h3 className="App">Loading...</h3>
  }
  const dogName = res.response.status;
  const imageUrl = res.response.message;
  return (
    <div className="App">
      <div>
        <h3>{dogName}</h3>
        <div>
          <img src={imageUrl} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default App;
