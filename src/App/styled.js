import styled from 'styled-components';
import { Card, Textfield } from '../components/UIKit';

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
