import React from "react";
import PropTypes from "proptypes";
import FacebookLogin from "react-facebook-login";
import { View } from "react-primitives";

const Auth = ({ auth, onLogin, onFacebookConnect }) => null;
/*
  <View>
    {auth.providerData &&
      !auth.providerData[0] &&
      <FacebookLogin
        appId="1752869298345039"
        autoLoad={true}
        fields="name,email,picture"
        onClick={(...args) => console.log(args)}
        callback={onFacebookConnect}
      />}
    {auth && auth.uid
      ? <pre><small>{JSON.stringify(auth, null, 2)}</small></pre>
      : <button onClick={onLogin}>Login</button>}
  </View>
);
*/
export default Auth;
