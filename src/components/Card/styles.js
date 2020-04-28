import styled from '@emotion/styled/macro';

const StyledCardContainer = styled.div`
  background: ${props => props.background};
  border-radius: 0.5rem;
  display: flex;
  height: 22rem;
  margin-bottom: 3rem;
`;
const StyledCard = styled.div`
  background-color: ${props => props.theme.bg.card};
  display: flex;
  width: 32rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 0.5rem 0.5rem;
  margin-top: 0.5rem;
  height: 22rem;
  
  &:hover {
    background-color: ${props => props.theme.bg.hover};
    cursor: pointer;
  }
  
  @media(min-width: 1440px) {
    width: 30rem;
  }
`;

const StyledHeading = styled.div`
  font-weight: 700;
`;

const StyledIcon = styled.img`
  vertical-align: top;
  padding-right: 0.5rem;  
`;

const StyledFollowers = styled.div`
  text-align: center;
`;

const StyledFollowerQuantity = styled.span`
  display: block;
  font-size: 6rem;
  font-weight: 700;
  color: ${props => props.theme.text.secondary};
  padding-top: 2.5rem;
`;

const StyledFollowersText = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;

const StyledArrow = styled.img`
  vertical-align: top;
  padding-right: 0.2rem;
`;

const StyledStatus = styled.div`
  color: ${props => props.color};
  display: inline-flex;
  align-items: center;
  padding-top: 2.5rem;
  font-weight: 700;
`;

const StyledOverviewCard = styled.div`
  background-color: ${props => props.theme.bg.card};
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  height: 10rem;
  padding: 2rem 2rem 0;
  width: 28rem;
  margin-bottom: 3rem;
  
  &:hover {
  background-color: ${props => props.theme.bg.hover};
  cursor: pointer;
  }
  
  @media(min-width: 1440px) {
    width: 26rem;
  }
  
  & > ${StyledHeading} {
    display: inline-flex;
    justify-content: space-between;
  }
  
  & > ${StyledFollowers} {
    display: inline-flex;
    justify-content: space-between;
    
    & > ${StyledFollowerQuantity} {
      font-size: 3rem;
    }
    & > ${StyledStatus} {
      align-self: flex-end;
      padding-bottom: 0.5rem;
    }
  }
  

  

  
`;
export {
  StyledOverviewCard,
  StyledArrow,
  StyledCard,
  StyledCardContainer,
  StyledFollowers,
  StyledHeading,
  StyledIcon,
  StyledFollowerQuantity,
  StyledFollowersText,
  StyledStatus,
};
