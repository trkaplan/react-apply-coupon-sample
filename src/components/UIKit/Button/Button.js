import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styled';

const Button = ({ children, className, onClick, size }) => (
  <StyledButton className={className} onClick={onClick} size={size}>
    {children}
  </StyledButton>
);
Button.defaultProps = {
  className: null,
  onClick: () => {},
  size: 'default'
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['default', 'medium'])
};
export default Button;
