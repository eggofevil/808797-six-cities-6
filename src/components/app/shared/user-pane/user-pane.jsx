import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import authStatePropTypes from '../../../prop-types/authstate.proptypes.js';

const UserPane = ({authState}) => {
  return (
    <Link className="header__nav-link header__nav-link--profile" to={authState ? `/favorites` : `/login`}>
      {authState ?
        <>
          <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${authState.avatar_url})`,
            color: `red`}}>
          </div>
          <span className="header__user-name user__name">{authState.email}</span>
        </>
        :
        <>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__login">Sign in</span>
        </>
      }
    </Link>
  );
};

const mapStateToProps = ({LOGIC}) => ({authState: LOGIC.authState});

UserPane.propTypes = {
  authState: authStatePropTypes
};

export {UserPane};
export default connect(mapStateToProps)(UserPane);
