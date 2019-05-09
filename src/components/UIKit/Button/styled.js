import styled from 'styled-components';
import theme from '../../../theme';

const sizes = {
  default: { width: 'auto', height: '32px' },
  medium: { width: '140px', height: '44px' }
};
const StyledButton = styled.button`
  color: ${theme.color.white};
  background-color: ${theme.color.black};
  user-select: none;
  &:focus {
    outline: none;
  }
  width: ${props => (props.size ? sizes[props.size].width : sizes.default.width)};
  height: ${props => (props.size ? sizes[props.size].height : sizes.default.height)};
`;
export default StyledButton;
