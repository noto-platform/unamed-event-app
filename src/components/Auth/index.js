import React from "react";
import PropTypes from "proptypes";
import FacebookLogin from "react-facebook-login";
import { View } from "react-primitives";

const Auth = ({ auth, onLogin, onFacebookConnect }) =>
  auth.providerData && auth.providerData[0]
    ? null
    : <View>
        <FacebookLogin
          appId="1752869298345039"
          autoLoad={true}
          fields="name,email,picture"
          onClick={(...args) => console.log(args)}
          callback={onFacebookConnect}
          textButton="Connect Facebook"
          size="small"
        />
      </View>;

export default Auth;
