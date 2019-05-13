import React, { Component, Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import API_GIFT_CARD_VALIDATOR from '../constants';
import theme from '../theme';
import formatCurrency from '../utils';
import {
  StyledCard,
  PageWrapper,
  GiftCardItem,
  Description,
  GiftCardItemAmount,
  GiftCardItemCC,
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
    errorMessage: null,
    errorTarget: null
  };

  addGiftCard = (list, item) => {
    return list.concat(item);
  };

  updateGiftCard = () => {
    const { currentCardNumber, currentControlCode, giftCards } = this.state;
    if (giftCards.filter(e => e.giftCode === currentCardNumber).length > 0) {
      this.setState({
        errorMessage: 'This gift card is already applied.',
        errorTarget: 'CardNumber'
      });
      return;
    }
    fetch(
      `${API_GIFT_CARD_VALIDATOR}?giftCode=${currentCardNumber}&controlCode=${currentControlCode}`
    )
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const giftCardObject = data[0];
          const updatedGiftCards = this.addGiftCard(giftCards, giftCardObject);
          this.setState({
            giftCards: updatedGiftCards,
            currentCardNumber: '',
            currentControlCode: ''
          });
        } else {
          this.setState({
            errorMessage: 'Invalid Gift Card Code or Control Code',
            errorTarget: ''
          });
        }
      });
  };

  toggleGiftCards = () => {
    const { isGiftCardsVisible } = this.state;
    this.setState({ isGiftCardsVisible: !isGiftCardsVisible });
  };

  isANumber = str => {
    return !/\D/.test(str);
  };

  onCardNumberChange = e => {
    let errorMessage;
    let target;

    if (!this.isANumber(e.target.value)) {
      errorMessage = 'Gift Card number must contain only numbers (0-9).';
      target = 'CardNumber';
    }
    this.setState({ currentCardNumber: e.target.value, errorMessage, errorTarget: target });
  };

  onGiftCardInputKeyPress = e => {
    if (e.charCode === 13) {
      this.updateGiftCard();
    }
  };

  onCardControlCodeBlur = e => {
    const { currentControlCode } = this.state;
    if (
      typeof currentControlCode == 'undefined' ||
      (currentControlCode.length > 0 && currentControlCode.length !== 3)
    ) {
      this.setState({
        errorMessage: 'Gift Card Control Code must be 3 digits',
        errorTarget: 'ControlCode'
      });
    }
  };

  onCardNumberBlur = e => {
    const { currentCardNumber } = this.state;
    if (
      typeof currentCardNumber == 'undefined' ||
      (currentCardNumber.length > 0 && currentCardNumber.length !== 19)
    ) {
      this.setState({
        errorMessage: 'Gift Card number must be 19 digits',
        errorTarget: 'CardNumber'
      });
    }
  };

  onCardControlCodeChange = e => {
    let errorMessage;
    let target;
    if (!this.isANumber(e.target.value)) {
      errorMessage = 'Gift Card control code must contain only numbers (0-9).';
      target = 'ControlCode';
    }
    this.setState({ currentControlCode: e.target.value, errorMessage, errorTarget: target });
  };

  render() {
    const {
      isGiftCardsVisible,
      errorMessage,
      errorTarget,
      currentCardNumber,
      currentControlCode,
      giftCards
    } = this.state;
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
                <Description>
                  Please enter the 19-digit number and code from your gift card below.
                </Description>
                <div>
                  {giftCards &&
                    giftCards.map(item => {
                      return (
                        <GiftCardItem key={item.giftCode}>
                          <div>
                            <span>Gift Card</span>
                            <GiftCardItemCC>
                              **** **** **** ****
                              {item.controlCode}
                            </GiftCardItemCC>
                          </div>
                          <GiftCardItemAmount>
                            -{formatCurrency(item.giftAmount)}
                          </GiftCardItemAmount>
                        </GiftCardItem>
                      );
                    })}
                </div>
                <NewGiftCardWrapper>
                  <TextfieldCardNumber
                    value={currentCardNumber}
                    maxLength={19}
                    placeholder="Gift Card Number"
                    onChange={this.onCardNumberChange}
                    onBlur={this.onCardNumberBlur}
                    onKeyPress={this.onGiftCardInputKeyPress}
                    highlighted={errorTarget === 'CardNumber'}
                    name="currentCardNumber"
                    errorText={errorMessage}
                  />
                  <TextfieldControlCode
                    value={currentControlCode}
                    maxLength={3}
                    placeholder="Control Code"
                    onChange={this.onCardControlCodeChange}
                    onBlur={this.onCardControlCodeBlur}
                    onKeyPress={this.onGiftCardInputKeyPress}
                    highlighted={errorTarget === 'ControlCode'}
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
