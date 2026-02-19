import styled from '@emotion/styled/macro';

const StyledCardsContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  top: -5rem;

  @media (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    top: -10rem;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;

  @media (min-width: 1440px) {
    padding: 0 10rem;
  }
`;

const StyledTitle = styled.h1`
  display: block;
  align-self: start;
  padding-left: 2rem;
  color: ${(props) => props.theme.text.secondary};

  @media (min-width: 1440px) {
    padding-left: 12rem;
  }
`;

export { StyledCardsContainer, StyledTitle, StyledWrapper };
