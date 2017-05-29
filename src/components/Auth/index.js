import React from "react";
import PropTypes from "proptypes";

const Auth = ({ auth, onLogin }) => (
  <div>
    {auth && auth.uid
      ? <pre><small>{JSON.stringify(auth, null, 2)}</small></pre>
      : <button onClick={onLogin}>Login</button>}
  </div>
);

export default Auth;
