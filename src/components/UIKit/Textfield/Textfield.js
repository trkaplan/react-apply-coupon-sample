import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../theme';

const StyledInput = styled.input`
  text-indent: 10px;
  border: 1px solid ${theme.color.grayBorder};
  ${({ highlighted }) => highlighted && `border: 2px solid ${theme.color.error};`};
  &:focus {
    outline: none;
  }
`;

const ErrorText = styled.div`
  color: ${theme.color.error};
  padding-top: 2px;
`;

class Textfield extends Component {
  onBlurHandler = (e, onBlur) => {
    onBlur && onBlur(e);
  };

  onChangeHandler = (e, onChange) => {
    onChange && onChange(e);
  };

  onKeyPressHandler = (e, onKeyPress) => {
    onKeyPress && onKeyPress(e);
  };

  render() {
    const {
      name,
      value,
      onBlur,
      onChange,
      onKeyPress,
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
          onBlur={event => this.onBlurHandler(event, onBlur)}
          onChange={event => this.onChangeHandler(event, onChange)}
          onKeyPress={event => this.onKeyPressHandler(event, onKeyPress)}
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
  onBlur: () => {},
  onChange: () => {},
  onKeyPress: () => {},
  name: null,
  highlighted: false,
  errorText: null,
  maxLength: null
};
Textfield.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  name: PropTypes.string,
  highlighted: PropTypes.bool,
  errorText: PropTypes.string,
  maxLength: PropTypes.number
};
export default Textfield;
