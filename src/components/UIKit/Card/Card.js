import React from 'react';
import PropTypes from 'prop-types';
import { Title, Container } from './styled';

const Card = ({ title, children, className }) => (
  <Container className={className}>
    {title && <Title>{title}</Title>}
    {children}
  </Container>
);
Card.defaultProps = {
  title: null,
  className: null
};
Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
export default Card;
