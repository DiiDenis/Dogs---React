import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  disabled: false,
};

export default Button;
