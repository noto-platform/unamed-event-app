import React from 'react';
import { connect } from 'react-redux';

const AuthPage = ({user}) => (
  <div>Auth testing - {user}</div>
);

const mapStateToProps = ({auth}) => ({...auth});

export default connect(mapStateToProps)(AuthPage);
