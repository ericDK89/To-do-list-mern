import './App.css';
import Header from './components/Header';
import PostData from './components/PostData';
import Edit from './components/Edit'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<Header/>}/>        
            <Route path='/additem' element={<PostData/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
