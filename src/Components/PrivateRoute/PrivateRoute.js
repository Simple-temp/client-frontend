import React, { useContext } from 'react'
import { Store } from '../../Store'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const { state } = useContext(Store)
    const { userInfo } = state
    return userInfo ? children : <Navigate to="/login" />
}

export default PrivateRoute