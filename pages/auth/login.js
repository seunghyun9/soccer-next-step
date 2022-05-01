import React from 'react';
import { connect } from 'react-redux';
import { login } from '@/modules/auth/register';
import { Login } from '@/components/auth/Login';

const LoginPage = () => {
  return (
    <Login/>
  );
};

const mapStateToProps = state => ({})
const loginActions = {}
export default connect(mapStateToProps, loginActions)(LoginPage)