import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';
import { renderRoutes } from 'react-router-config';

function App() {
  return (
      <Router>
           {renderRoutes(Routes)}
        </Router>
  );
}

export default App;
