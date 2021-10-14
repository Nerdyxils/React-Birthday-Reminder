import React, { useState } from 'react';
import List from './List.jsx'
import Data from './data.jsx'
import './App.css';

function App() {
  const [people, setPeople] = useState(Data);

  return (
    <main className="App">
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>Clear All</button>
        <button onClick={() => window.location.reload(false)}>Bring Back</button>
      </section>
    </main>
  );
}

export default App;
