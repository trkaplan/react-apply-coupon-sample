import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../theme';

const StyledInput = styled.input`
  text-indent: 10px;
  border: 1px solid ${theme.color.grayBorder};
  ${({ highlighted }) => highlighted && `border: 2px solid ${theme.color.error};`};
`;

const ErrorText = styled.div`
  color: ${theme.color.error};
  padding-top: 2px;
`;

class Textfield extends Component {
  onChangeHandler = (e, onChange) => {
    onChange && onChange(e);
  };

  render() {
    const {
      name,
      value,
      onChange,
      highlighted,
      className,
      placeholder,
      errorText,
      maxLength
    } = this.props;
    return (
      <div>
        <StyledInput
          value={value}
          placeholder={placeholder}
          className={className}
          name={name}
          type="text"
          onChange={event => this.onChangeHandler(event, onChange)}
          maxLength={maxLength}
          highlighted={highlighted}
        />
        {errorText && <ErrorText>{errorText}</ErrorText>}
      </div>
    );
  }
}
Textfield.defaultProps = {
  className: null,
  placeholder: null,
  value: '',
  onChange: () => {},
  name: null,
  highlighted: false,
  errorText: null,
  maxLength: null
};
Textfield.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  highlighted: PropTypes.bool,
  errorText: PropTypes.string,
  maxLength: PropTypes.number
};
export default Textfield;
