import logo from '../../assets/images/logIn.jpg'

const LoginLogo = (version) => {
  return (
    <div className="login-logo">
        <img className="logo-trust-fund" alt="loginLogo" src={logo} />
        <p className="bottom-right">version {version.version.version}</p>
    </div>
  );
};

export { LoginLogo };
