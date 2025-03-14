import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import UseState from './components/Day-03/UseState';
import UseEffect from './components/Day-03/USeEffect';
import UseParams from './components/Day-03/UseParams';
import UseParamsProduct from './components/Day-03/UseParamsProduct';
import { useEffect, useState } from 'react';
import Props from './components/Day-04/Props';
import Todo from './components/Day-04/ToDo';
import NewTodo from './components/Day-04/NewTodo';
import FormPage from './components/Day-05/FormPage';
import UseMemo from './components/Day-06/UseMemo';
import UseCallback from './components/Day-06/UseCallback';

import Todo3 from './components/Day-04/Todo3';
import UseRef from './components/Day-07/UseRef';
import UseReducer from './components/Day-07/UseReducer';
import NewReducer from './components/Day-07/NewReducer';
import ReducerPage from './components/Day-07/ReducerPage';
import ContextCounter from './components/Day-08/ContextCounter';
import ReduxCounter from './components/Day-09/ReduxCounter';
import ReduxSliceCounter from './components/Day-09/ReduxSliceCounter';
import AllProducts from './components/Day-10/AllProducts';
import FakeLogin from './components/Day-10/FakeLogin';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './redux/userSlice';
import SingleProduct from './components/Day-10/SingleProduct';
import Navbar from './components/Day-10/Navbar';


function App() {
  const [counter,setCounter] = useState(0);
  const tokenFromRedux = useSelector((state)=> state.user.token );
  console.log(tokenFromRedux);
  const dispatch = useDispatch();

  useEffect(()=>{
    const tokenFromLocalStorage = JSON.parse(localStorage.getItem("token"));
    if(tokenFromLocalStorage){
      if(tokenFromRedux === null){
        dispatch(login(tokenFromLocalStorage));
      }
    }
  },[]) // this will prevent the data of token even when the page is refreshed

  return (
    <div className="App">
      <Navbar />
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
        <Route path='/use-ref' element={<UseRef />} />
        <Route path='/use-reducer' element={<UseReducer />} />
        <Route path='/new-reducer' element={<NewReducer />} />
        <Route path='/reducer' element={<ReducerPage />} />
        <Route path='/context-counter' element={<ContextCounter />} />
        <Route path='/redux-counter' element={<ReduxCounter />} />
        <Route path='/redux-slice-counter' element={<ReduxSliceCounter />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/fake-login' element={<FakeLogin />} />
        <Route path='/single-product/:id' element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
