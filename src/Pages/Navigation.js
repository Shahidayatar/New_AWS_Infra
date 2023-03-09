
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  navigate('/about');
  console.log('navigate');
}

export default Navigation;
