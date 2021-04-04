import React from 'react';
import PropTypes from 'prop-types';

function BookmarkButton({location}) {
  const elementClassName = `${location}__bookmark-`;
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

  return (
    <button className={`${elementClassName}button button`} type="button">
      <svg
        className={`${elementClassName}icon`}
        width={ICON_DIMENSIONS[location].width}
        height={ICON_DIMENSIONS[location].height}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

BookmarkButton.propTypes = {
  location: PropTypes.string.isRequired
};

export default BookmarkButton;
