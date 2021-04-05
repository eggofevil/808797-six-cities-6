import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

import {postBookmarked} from '../../../../store/api-actions.js';

import authStatePropTypes from '../../../prop-types/authstate.proptypes.js';
import offerPropTypes from '../../../prop-types/offer.proptypes.js';

function BookmarkButton({location, authState, offer}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const buttonClassName = offer.is_favorite && authState ?
    `${location}__bookmark-button ${location}__bookmark-button--active button`
    :
    `${location}__bookmark-button button`;
  const iconClassName = `${location}__bookmark-icon`;
  const ICON_DIMENSIONS = {
    'property': {
      width: 31,
      height: 33
    },
    'place-card': {
      width: 18,
      height: 19
    }
  };

  function handleClick() {
    if (!authState) {
      history.push(`/login`);
    } else {
      const activeStatus = offer.is_favorite ? 0 : 1;
      dispatch(postBookmarked(offer, activeStatus));
    }
  }

  return (
    <button className={buttonClassName} type="button" onClick={handleClick}>
      <svg
        className={iconClassName}
        width={ICON_DIMENSIONS[location].width}
        height={ICON_DIMENSIONS[location].height}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

const mapStateToProps = ({LOGIC}) => ({authState: LOGIC.authState});

BookmarkButton.propTypes = {
  location: PropTypes.string.isRequired,
  authState: authStatePropTypes,
  offer: offerPropTypes.isRequired
};

export {BookmarkButton};
export default connect(mapStateToProps)(BookmarkButton);
