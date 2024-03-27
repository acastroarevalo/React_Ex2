import { createContext, useState } from "react";

const LoginStateContext = createContext({
    loginStatus: '',
    login: () => {},
    logout: () => {},
    edit: () => {}
});

export function LoginStateContextProvider({children}){
    const [loginState, setLoginState] = useState('');

    function login(){
        setLoginState('loggedIn');
    }

    function logout(){
        setLoginState('');
    }

    function edit(){
        setLoginState('edit');
    }

    const loginStateCtx = {
        loginStatus: loginState,
        login,
        logout,
        edit
    }

    return(
        <LoginStateContext.Provider value={loginStateCtx}>{children}</LoginStateContext.Provider>
    );
}

export default LoginStateContext;