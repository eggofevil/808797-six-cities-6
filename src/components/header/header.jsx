import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import UserPane from '../user-pane/user-pane.jsx';

const Header = ({mainPageLinkDisabled}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {mainPageLinkDisabled ?
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
              :
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            }
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <UserPane />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  mainPageLinkDisabled: PropTypes.bool
};

export default Header;
