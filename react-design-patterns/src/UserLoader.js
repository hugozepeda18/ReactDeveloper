import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UserLoader = ({ userId, children }) => {
    const [user, setUser ] = useState(null)

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`)
            setUser(response.data)
        
        })() // ANONYMOUS FUNCTION
    }, [userId]) // TO MAKE SURE IT EXECUTES ONLY WHEN IS RENDERED

    return(
        <>
            {React.Children.map(children, child => {
                if(React.isValidElement(child)) {
                    return React.cloneElement(child, { user })
                }
                return child
            })}
        </>
    )
}