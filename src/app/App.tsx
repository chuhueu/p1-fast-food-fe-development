import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Routes } from './routes';
import { renderRoutes } from 'react-router-config';
import AuthProvider from '../app/context/AuthContext';

function App() {
    return (
        <Router>
            <Switch>
                <AuthProvider>{renderRoutes(Routes)}</AuthProvider>
            </Switch>
        </Router>
    );
}

export default App;
