import React from 'react';
import Select from './components/pages/select';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from './components/pages/board';
import BoardAi from './components/pages/boardai';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Select />} />
          <Route path='gameone' element={<Board/>}/>
          <Route path='gameai' element={<BoardAi />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
