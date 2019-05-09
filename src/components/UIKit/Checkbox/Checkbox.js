import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../theme';

const Label = styled.label`
  display: flex;
`;
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
const StyledCheckbox = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  background: ${props => (props.checked ? theme.color.green : theme.color.white)};
  border: 1px solid ${theme.color.grayDark};
  margin-right: 3px;
  border-radius: 3px;
  transition: all 150ms;
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

const Input = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  &:checked + ${Icon} {
    &:after {
      top: 0;
    }
  }
`;

class Checkbox extends React.Component {
  onChange = e => {
    const { setChecked } = this.props;
    setChecked(e.target.checked);
  };

  render() {
    const { checked, children } = this.props;
    return (
      <Label>
        <Input checked={checked} onChange={this.onChange} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
        <span>{children}</span>
      </Label>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  setChecked: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
export default Checkbox;
