import React from 'react';
import {Link} from 'react-router-dom';

class UserInfo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }

  render() {
    return (
      <Link className="header__nav-link header__nav-link--profile" to="/login">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login">Sign in</span>
      </Link>
    );
  }
}

export default UserInfo;
