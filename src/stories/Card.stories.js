import React from 'react';
import { ThemeProvider } from '@emotion/react';
import {
  StyledCardContainer,
  StyledCard,
  StyledFollowers,
  StyledHeading,
  StyledIcon,
  StyledFollowerQuantity,
  StyledArrow, StyledStatus, StyledFollowersText, StyledOverviewCard
} from '../components/Card/styles';
import {darkTheme, lightTheme} from '../components/themes';
import {GlobalStyles} from '../components/GlobalStyles';
import { colors } from '../components/colors';
import {StyledCardsContainer} from '../components/CardsContainer/styles';

export default {
  title: 'Card',
};

export const TopCardDark = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles/>
    <StyledCardsContainer>
      <StyledCardContainer background={colors.facebook}>
        <StyledCard>
          <StyledHeading>
            <StyledIcon src="./images/icon-facebook.svg" alt="facebook icon" />
            <span>@nathanf</span>
          </StyledHeading>
          <StyledFollowers>
            <StyledFollowerQuantity>1987</StyledFollowerQuantity>
            <StyledFollowersText>Followers</StyledFollowersText>
          </StyledFollowers>
          <StyledStatus>
            <StyledArrow className="arrow up" src="./images/icon-up.svg" alt="arrow up" />
            <span>12 Today</span>
          </StyledStatus>
        </StyledCard>
      </StyledCardContainer>
    </StyledCardsContainer>
  </ThemeProvider>
);

export const TopCardLight = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles/>
    <StyledCardsContainer>
      <StyledCardContainer background={colors.facebook}>
        <StyledCard>
          <StyledHeading>
            <StyledIcon src="./images/icon-facebook.svg" alt="facebook icon" />
            <span>@nathanf</span>
          </StyledHeading>
          <StyledFollowers>
            <StyledFollowerQuantity>1987</StyledFollowerQuantity>
            <StyledFollowersText>Followers</StyledFollowersText>
          </StyledFollowers>
          <StyledStatus>
            <StyledArrow className="arrow up" src="./images/icon-up.svg" alt="arrow up" />
            <span>12 Today</span>
          </StyledStatus>
        </StyledCard>
      </StyledCardContainer>
    </StyledCardsContainer>
  </ThemeProvider>
);

export const TodayCardLight = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles/>
    <StyledCardsContainer>
      <StyledOverviewCard>
        <StyledHeading>
          <span>Page Views</span><StyledIcon src="./images/icon-facebook.svg" alt="facebook icon" />
        </StyledHeading>
        <StyledFollowers>
          <StyledFollowerQuantity>87</StyledFollowerQuantity>
          <StyledStatus color={colors.brightRed}>
            <StyledArrow src="./images/icon-up.svg" alt="arrow up" />
            <span>3%</span>
          </StyledStatus>
        </StyledFollowers>
      </StyledOverviewCard>
    </StyledCardsContainer>
  </ThemeProvider>
);

export const TodayCardDark = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles/>
    <StyledCardsContainer>
        <StyledOverviewCard>
          <StyledHeading>
            <span>Page Views</span><StyledIcon src="./images/icon-facebook.svg" alt="facebook icon" />
          </StyledHeading>
          <StyledFollowers>
            <StyledFollowerQuantity>87</StyledFollowerQuantity>
            <StyledStatus color={colors.brightRed}>
              <StyledArrow src="./images/icon-up.svg" alt="arrow up" />
              <span>3%</span>
            </StyledStatus>
          </StyledFollowers>
        </StyledOverviewCard>
    </StyledCardsContainer>
  </ThemeProvider>
);

