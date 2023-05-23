import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AuthContext } from '../context/authContext'

function PublicRoute({ component: Component, ...rest }) {
    const { authenticated, loading } = useContext(AuthContext)
    if (loading) {
        return null
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                !authenticated && !loading ? <Component {...props} /> : <Redirect to="/tfs" />
            }
        />
    )
}

PublicRoute.propTypes = {
    component: PropTypes.object.isRequired
}

export default PublicRoute
