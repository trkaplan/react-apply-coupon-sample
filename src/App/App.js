import React, { Component, Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import theme from '../theme';
import {
  StyledCard,
  PageWrapper,
  GiftCards,
  NewGiftCardWrapper,
  TextfieldCardNumber,
  TextfieldControlCode
} from './styled';
import { Checkbox, Button } from '../components/UIKit';

const GlobalStyle = createGlobalStyle`
body {
  font-size:${theme.fontSize.xs};
  font-family:${theme.fontFamily.default};
  background-color:${theme.color.grayDark};
}
`;
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  state = {
    isGiftCardsVisible: false,
    giftCards: [],
    errorMessage: null
  };

  addGiftCard = (list, item) => {
    return list.concat(item);
  };

  onCurrentCardNumberChange = event => {
    this.setState({ currentCardNumber: event.target.value });
  };

  onControlCodeChange = event => {
    this.setState({ currentControlCode: event.target.value });
  };

  updateGiftCard = () => {
    const { currentCardNumber, currentControlCode, giftCards } = this.state;
    if (giftCards.filter(e => e.cardNumber === currentCardNumber).length > 0) {
      this.setState({ errorMessage: 'This gift card is already applied.' });
      return;
    }
    const newGiftCard = {
      cardNumber: currentCardNumber,
      controlCode: currentControlCode
    };
    const updatedGiftCards = this.addGiftCard(giftCards, newGiftCard);
    this.setState({
      giftCards: updatedGiftCards,
      currentCardNumber: '',
      currentControlCode: ''
    });
  };

  toggleGiftCards = () => {
    const { isGiftCardsVisible } = this.state;
    this.setState({ isGiftCardsVisible: !isGiftCardsVisible });
  };

  render() {
    const { isGiftCardsVisible, errorMessage, currentCardNumber, currentControlCode } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
        <PageWrapper>
          <StyledCard title="Gift Cards">
            <Checkbox checked={isGiftCardsVisible} setChecked={this.toggleGiftCards}>
              Do you have a gift card?
            </Checkbox>
            {isGiftCardsVisible && (
              <GiftCards>
                <p>Please enter the 19-digit number and code from your gift card below.</p>
                <NewGiftCardWrapper>
                  <TextfieldCardNumber
                    value={currentCardNumber}
                    placeholder="Gift Card Number"
                    onChange={e =>
                      this.setState({ currentCardNumber: e.target.value, errorMessage: null })
                    }
                    highlighted={!!errorMessage}
                    name="currentCardNumber"
                    errorText={errorMessage}
                  />
                  <TextfieldControlCode
                    value={currentControlCode}
                    placeholder="Control Code"
                    onChange={e => this.setState({ currentControlCode: e.target.value })}
                    name="currentControlCode"
                  />
                </NewGiftCardWrapper>
                <Button onClick={this.updateGiftCard} size="medium">
                  APPLY
                </Button>
              </GiftCards>
            )}
          </StyledCard>
        </PageWrapper>
      </Fragment>
    );
  }
}
export default App;
