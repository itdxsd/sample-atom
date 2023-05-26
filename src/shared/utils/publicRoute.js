import React, { useContext } from 'react'
import { redirect, Route, Routes } from 'react-router-dom'
import PropTypes, { element } from 'prop-types'
// import { AuthContext } from '../context/authContext'

function PublicRoute({ component: Component, ...rest }) {
    // const { authenticated, loading } = useContext(AuthContext)
    const authenticated = false;
    const loading = false
    if (loading) {
        return null
    }
    // <Route path="/login" render={() => (
    //     <div>
    //       <LoginPage />
    //       <Redirect to="/" />
    //     </div>
    //   )} />
    console.log(!authenticated && !loading)
    return (
        <Routes>
            { !authenticated && !loading ?
                <Route path="/" element={<Component  {...rest}/>}/>
                : <Route path="/" element={<Component  {...rest}/>}/>
            }
        </Routes>
    )
}

PublicRoute.propTypes = {
    component: PropTypes.object.isRequired
}

export default PublicRoute
