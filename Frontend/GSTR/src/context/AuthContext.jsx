import { createContext, useState, useEffect } from "react";


const AuthContext = createContext(null);

export default AuthContext;


export const AuthProvider = ({children}) =>{
    return (
         <AuthContext.Provider value={{userName: setuserName}}>
            {children}
         </AuthContext.Provider>
    )
}
