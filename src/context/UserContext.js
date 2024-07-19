
const { createContext, useState, useEffect } = require("react");


export const UserContext=createContext(null)

const userLocalStorage=JSON.parse(localStorage.getItem("user"))


export const UserContextProvider=({children})=>{
    
    const [userInfo,setUserInfo]=useState(null||userLocalStorage)

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(userInfo))
    },[userInfo])

    return <UserContext.Provider value={{userInfo,setUserInfo}}>
        {children}
    </UserContext.Provider>
}