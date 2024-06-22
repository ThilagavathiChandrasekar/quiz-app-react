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
        <Route path='/github.io/quiz-app-react' element={< Home />} />
        <Route path='/github.io/quiz-app-react/play/instruction' element={<QuizIns />} />
        <Route path='/github.io/quiz-app-react/play/quiz' element={<PlayWithRouter />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
