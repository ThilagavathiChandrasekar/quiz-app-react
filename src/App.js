import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


import Home from './components/Home';
import QuizIns from './components/QuizIns';
import { PlayWithRouter } from './components/Play';
import Register from './components/Register';
import LoginForm from './Forms/LoginForm';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/play/instruction' element={<QuizIns />} />
        <Route path='/play/quiz' element={<PlayWithRouter />} />
        <Route path='/register' element={< Register />} />
        <Route path='/loginform' element={< LoginForm />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
