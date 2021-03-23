import React from 'react';
import styles from './Image.module.css';
import PropTypes from 'prop-types';

const Image = ({ alt, exemplo, ...props }) => {
  const [skeletor, setSkeletor] = React.useState(true);

  function handleLoad({ target }) {
    target.style.opacity = 1;
    setSkeletor(false);
  }

  return (
    <div className={`${styles.wrapper} ${exemplo ? styles.exemplo : ''}`}>
      <div className={styles.skeleton}></div>
      {skeletor && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  );
};

Image.prototypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  exemplo: PropTypes.bool,
};

Image.defaultProps = {
  src: '',
  alt: '',
  exemplo: false,
};

export default Image;
