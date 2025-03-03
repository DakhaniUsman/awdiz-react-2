import { Form, Route, Routes } from 'react-router-dom';
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
import FormPage from './components/Day-05/FormPage';
import UseMemo from './components/Day-06/UseMemo';
import UseCallback from './components/Day-06/UseCallback';

import Todo3 from './components/Day-04/Todo3';


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
        <Route path="/todo3" element={<Todo3 /> } />
        <Route path="/newtodo" element={<NewTodo /> } />
        <Route path='/formpage' element={<FormPage />} />
        <Route path='/use-memo' element={<UseMemo />} />
        <Route path='/use-callback' element={<UseCallback />} />
      </Routes>
    </div>
  );
}

export default App;
