import { createContext, useState } from "react";

const LoginStateContext = createContext({
    loginStatus: '',
    login: () => {},
    logout: () => {}
});

export function LoginStateContextProvider({children}){
    const [loginState, setLoginState] = useState('');

    function login(){
        setLoginState('loggedIn');
        alert('Logging In')
    }

    function logout(){
        setLoginState('');
        alert('Logging Out')
    }

    const loginStateCtx = {
        loginStatus: loginState,
        login,
        logout
    }

    return(
        <LoginStateContext.Provider value={loginStateCtx}>{children}</LoginStateContext.Provider>
    );
}

export default LoginStateContext;