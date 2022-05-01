import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">

      <Main></Main>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
