import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from '../app/context/AuthContext';

import { ElementRouteUser, ElementRouteAdmin } from './routes/index';
// redux
import { RootState } from './redux/store';
import { userState } from './redux/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { createCart } from './redux/actions/cartActions';
import { useEffect, useState } from 'react';

function App() {
    const userLogin = useSelector<RootState, userState>((state) => state.userLogin);
    const dispatch = useDispatch();

    const { userInfo } = userLogin;
    const [check, setCheck] = useState(false);

    useEffect(() => {
        if (userInfo?._id) {
            dispatch(createCart(userInfo?._id));
        }

        if (userInfo?.role === 'ROLE_ADMIN') {
            setCheck(true);
        }
    }, [userInfo, dispatch]);

    return (
        <Router>
            <AuthProvider>{check ? <ElementRouteAdmin /> : <ElementRouteUser />}</AuthProvider>
        </Router>
    );
}

export default App;
