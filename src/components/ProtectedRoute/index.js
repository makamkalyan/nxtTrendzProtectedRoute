// Write your JS code here
import Cookies from 'js-cookie'

import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwToken = Cookies.get('jwt_token')
  if (jwToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}
export default ProtectedRoute
