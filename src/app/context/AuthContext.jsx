import React, { useState } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export { AuthContext };
