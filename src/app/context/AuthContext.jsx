import React, { useState } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        user: '',
        password: ''
    });
    const [isShowCart, setIsShowCart] = useState(false);
    const [showDetail, setShowDetail] = React.useState(false);

    return (
        <AuthContext.Provider value={{ user, setUser, isShowCart, setIsShowCart, showDetail, setShowDetail }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export { AuthContext };
