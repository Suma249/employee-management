import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import { NoMatch } from './pages/nomatch/NoMatch';
import { PostUser } from './pages/employee/PostUser';
import { UpdateEmployee } from './pages/employee/UpdateEmployee';

function App() {
  return (
    <div className="App text-center">
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/employee' element={<PostUser />} />
        <Route path='/employee/:id' element={<UpdateEmployee />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
