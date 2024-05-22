import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


import Home from './components/Home';
import QuizIns from './components/QuizIns';
import { PlayWithRouter } from './components/Play';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/play/instruction' element={<QuizIns />} />
        <Route path='/play/quiz' element={<PlayWithRouter />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
