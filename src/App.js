import { Route, Routes } from 'react-router-dom';
import Layout from './Layout_button/Layout';

import About from './Pages/About';
import Login from './Pages/Login';





function App() {
    
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout></Layout>} />
        <Route path="/signup" element={<Login></Login>} />
        <Route path="/about" element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;
