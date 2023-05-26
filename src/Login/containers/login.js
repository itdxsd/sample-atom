import './login.css'
import { LoginInput } from "../components/loginInputs";
import { LoginFooter } from "../components/loginFooter";
import { LoginLogo } from "../components/loginLogo";
import packageJson from '../../../package.json'

function Login() {
    return (
        <div id="loginLayout" className="login-container">
            <LoginLogo version={packageJson}/>
            <LoginInput/>
            <LoginFooter/>
        </div>
    )
}
export default Login
