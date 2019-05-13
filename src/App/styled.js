import styled from 'styled-components';
import { Card, Textfield } from '../components/UIKit';
import theme from '../theme';

export const StyledCard = styled(Card)`
  width: 434px;
`;
export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const GiftCards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2px;
`;
export const GiftCardItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: ${theme.color.grayLight};
  padding: ${theme.padding.p10};
`;
export const Description = styled.p`
  font-weight: 300;
`;
export const GiftCardItemCC = styled.div`
  font-weight: 300;
  margin-top: 5px;
`;
export const GiftCardItemAmount = styled.div`
  font-weight: bold;
  align-self: center;
`;
export const NewGiftCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TextfieldCardNumber = styled(Textfield)`
  width: 300px;
  height: 44px;
  box-sizing: border-box;
`;

export const TextfieldControlCode = styled(Textfield)`
  width: 100px;
  height: 44px;
  box-sizing: border-box;
`;
