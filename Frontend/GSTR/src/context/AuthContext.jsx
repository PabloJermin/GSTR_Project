import { createContext, useState, useEffect } from "react";


const AuthContext = createContext(null);

export default AuthContext;


export const AuthProvider = ({children}) =>{
    let [user, setuser] = useState(null)
    let [authTokens, setauthTokens] = useState(null)

    let loginUser = async (e) =>{
        e.preventDefault()
        console.log("done")
        let response = fetch('http://127.0.0.1:8000/api/token', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})

        }
        )
    }
    
    let contextData = {
        
        loginUser: loginUser
    }
    return (
         <AuthContext.Provider value={contextData}>
            {children}
         </AuthContext.Provider>
    )
}
