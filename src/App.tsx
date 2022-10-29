import PageRoutes from 'containers/PageRoutes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = () => (
  <BrowserRouter>
    <PageRoutes />
  </BrowserRouter>
);

export default App;
