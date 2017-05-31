import React from "react";
import PropTypes from "proptypes";
import FacebookLogin from "react-facebook-login";

const Auth = ({ auth, onLogin, onFacebookConnect }) => (
  <div>
    {auth.providerData && !auth.providerData[0] && <FacebookLogin
      appId="1752869298345039"
      autoLoad={true}
      fields="name,email,picture"
      onClick={(...args) => console.log(args)}
      callback={onFacebookConnect}
    />}
    {auth && auth.uid
      ? <pre><small>{JSON.stringify(auth, null, 2)}</small></pre>
      : <button onClick={onLogin}>Login</button>}
  </div>
);

export default Auth;
