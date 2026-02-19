import styled from '@emotion/styled';

const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.bg.secondary};
  border-top: 1px solid ${(props) => props.theme.text.primary};
  padding: 1rem;
  text-align: center;

  a {
    text-decoration: none;
    font-weight: 600;
    color: ${(props) => props.theme.text.primary};
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
  }
`;

export { StyledFooter };
