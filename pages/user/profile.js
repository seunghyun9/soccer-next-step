import React from 'react';
import { connect } from 'react-redux';
import { profile } from '@/modules/user/profile';
import { Profile } from '@/components/user/Profile';

const ProfilePage = () => {
  return (
    <Profile/>
  );
};

export default connect(
  state => ({
    profileUser: state.profileUser
  }),
  {
    profile
  }
)(ProfilePage);