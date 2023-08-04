import React from 'react';
import PropTypes from 'prop-types';

const ImageComponent = ({ style, src, ...props }) => {
  const defaultStyle = {
    borderRadius: '5px',
    border: '1px solid grey',
    width: '750px',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={src} style={{ ...defaultStyle, ...style }} {...props} />
    </div>
  );
};

ImageComponent.propTypes = {
  style: PropTypes.object,
  src: PropTypes.string.isRequired,
};

ImageComponent.defaultProps = {
  style: {},
};

export default ImageComponent;