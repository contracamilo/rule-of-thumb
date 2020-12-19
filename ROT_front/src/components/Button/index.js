import React from 'react';
import PropTypes from 'prop-types';

/**
 * Ui component for user interaction.
 *
 * @param {object} props passed properties, check prop-types for details.
 * @return {JSX} Button component from bootstrap library.
 */
const Btn = (props) => {
  const { label, children } = props;
  return (
    <button type="button" {...props}>
      {label ? label : children}
    </button>
  );
};

export default Btn;

Btn.propTypes = {
  active: PropTypes.bool,
  'aria-label': PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  close: PropTypes.bool,
};

Btn.defaultProps = {
  color: 'secondary',
  tag: 'button',
};
