import React from 'react';
import TopCard from '../Card/TopCard';
import TodayCard from '../Card/TodayCard';
import {StyledCardsContainer, StyledTitle, StyledWrapper} from './styles';

const CardsContainer = ({ topContent, overViewContent }) => {
  const getRandomKey = () => Math.random().toString(36).substring(7);

  return (
    <StyledCardsContainer>
      <StyledWrapper>
        {
          topContent.map((topCard) => {
            return <TopCard key={getRandomKey()} {...topCard}/>
          })
        }
      </StyledWrapper>
      <StyledTitle>Overview - Today</StyledTitle>
      <StyledWrapper>
        {
          overViewContent.map((todayCard) => {
            return <TodayCard key={getRandomKey()} {...todayCard}/>
          })
        }
      </StyledWrapper>
    </StyledCardsContainer>
  );
};

export default CardsContainer;
