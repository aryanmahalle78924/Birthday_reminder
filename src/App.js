import './App.css';
import List from './List'; 
import data from './data'; 
import { useState } from 'react';

function App() {
 const[people,Setpeople] = useState(data);
 
  return (
   <main>
     <section className='container'>
        <h3>
          {people.length} birthdays today
        </h3>
        <List people = {people} />
        <button onClick={()=>Setpeople([])}>
          Clear all</button> 
     </section>
   </main>
  );
}

export default App;
