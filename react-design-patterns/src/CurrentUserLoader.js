import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const CurrentUserLoader = ({ children }) => {
    const [user, setUser ] = useState(null)

    useEffect(() => {
        (async () => {
            const response = await axios.get('/current-user')
            setUser(response.data)
        
        })() // ANONYMOUS FUNCTION
    }, []) // TO MAKE SURE IT EXECUTES ONLY WHEN IS RENDERED

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