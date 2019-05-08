import React, { Component, Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import theme from '../theme';
import { StyledCard, PageWrapper } from './styled';
import { Checkbox } from '../components/UIKit';

const GlobalStyle = createGlobalStyle`
body {
  font-size:${theme.fontSize.base};
  font-family:${theme.fontFamily.default};
  background-color:${theme.color.grayDark};
}
`;
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  state = {
    isGiftCardsVisible: false
  };

  toggleGiftCards = () => {
    const { isGiftCardsVisible } = this.state;
    this.setState({ isGiftCardsVisible: !isGiftCardsVisible });
  };

  render() {
    const { isGiftCardsVisible } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
        <PageWrapper>
          <StyledCard title="Gift Cards">
            <Checkbox checked={isGiftCardsVisible} setChecked={this.toggleGiftCards}>
              Do you have a gift card?
            </Checkbox>
            {isGiftCardsVisible && (
              <span>Please enter the 19-digit number and code from your gift card below.</span>
            )}
          </StyledCard>
        </PageWrapper>
      </Fragment>
    );
  }
}
export default App;
