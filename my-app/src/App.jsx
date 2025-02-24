import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import UseState from './components/Day-03/UseState';
import UseEffect from './components/Day-03/USeEffect';
import UseParams from './components/Day-03/UseParams';
import UseParamsProduct from './components/Day-03/UseParamsProduct';
import { useState } from 'react';
import Props from './components/Day-04/Props';
import Todo from './components/Day-04/ToDo';
import NewTodo from './components/Day-04/NewTodo';

function App() {
  const [counter,setCounter] = useState(0); 

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/use-state' element={<UseState />} />
        <Route path='/use-effect' element={<UseEffect />} />
        <Route path='/use-params' element={<UseParams />} />
        <Route path='/use-params-product/:id' element={<UseParamsProduct />} />
        <Route path='/props' element={<Props counter={counter} setCounter={setCounter}/>} />
        <Route path="/todo" element={<Todo /> } />
        <Route path="/newtodo" element={<NewTodo /> } />
      </Routes>
    </div>
  );
}

export default App;
