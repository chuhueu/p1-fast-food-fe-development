import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';
import { renderRoutes } from 'react-router-config';
import AuthProvider from '../app/context/AuthContext';

function App() {
    return (
        <Router>
            <AuthProvider>{renderRoutes(Routes)}</AuthProvider>
        </Router>
    );
}

export default App;
