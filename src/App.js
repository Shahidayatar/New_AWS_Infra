import { Route, Routes } from 'react-router-dom';
import Button from './Buttons/Button';

import About from './Pages/About';
import Login from './Pages/Login';




function App() {
    
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Button></Button>} />
        <Route path="/signup" element={<Login></Login>} />
        <Route path="/about" element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;
