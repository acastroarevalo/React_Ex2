import { createContext, useReducer } from "react";

const UserContext = createContext({
    user: {},
    updateUser: (user) => {},
    logoutUser: () => {}
});

function userReducer(state, action){
    if(action.type === 'UPDATE_USER'){
        const updatedUser = {...state.user};
        updatedUser.user = action.user;
        return {...state, user: updatedUser};
    }

    if(action.type === 'LOGOUT'){
        return {...state, user: {}}
    }

    return state;
}

export function UserContextProvider({children}){
    const[user, dispatchUserAction] = useReducer(userReducer, {user: {}});

    function updateUser(user){
        dispatchUserAction({type: 'UPDATE_USER', user})
    }

    function logoutUser(){
        dispatchUserAction({type: 'LOGOUT'})
    }

    const userContext = {
        user: user.user,
        updateUser,
        logoutUser
    }
    console.log(userContext);
    return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
}

export default UserContext;