import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import EmailSignIn from './components/EmailSignIn/EmailSignIn';

function App() {
  return (
    <div className="App">

      <Main></Main>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/signIn' element={<EmailSignIn></EmailSignIn>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
