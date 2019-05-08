import React, { Component, Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import theme from '../theme';
import { StyledCard, PageWrapper } from './styled';

const GlobalStyle = createGlobalStyle`
body {
  font-size:${theme.fontSize.base};
  font-family:${theme.fontFamily.default};
  background-color:${theme.color.grayDark};
}
`;
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <PageWrapper>
          <StyledCard title="Gift Cards">content</StyledCard>
        </PageWrapper>
      </Fragment>
    );
  }
}
export default App;
