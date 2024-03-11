import { Children, createContext, useContext, useReducer, useState } from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [context, setContext] = useState("React App");

    const initialState = {
        count: 0,
        context: "React App"
    }

    const reducer = (state, action) => {
        switch (action?.type) {
            case "INCREMENT":
                return { ...state, count: state.count + 1 }
            case "DECREMENT":
                return { ...state, count: state.count - 1 }
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuthContext = () => useContext(AuthContext)