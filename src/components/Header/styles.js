import styled from '@emotion/styled/macro';

const Divider = styled.hr`
  border-color: ${props => props.theme.text.primary};
  border-bottom: none;
  width: 100%;
  
  @media(min-width: 1440px) {
    display: none;
  }
`;
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.bg.secondary};
  border-radius: 0 0 2rem 2rem;
  height: 21rem;
  padding: 3rem 2rem 0 2rem;
  font-weight: 700;
  
  @media(min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DashboardInfo = styled.div``;

const Title = styled.h2`
    margin-top: 0;
    margin-bottom: 1rem;
    color: ${props => props.theme.text.secondary};
`;

const TotalFollowers = styled.div`
 padding-bottom: 1.5rem;
`;

const ModeSwitcher = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
`;

const Slider = styled.span`
  background: linear-gradient(45deg, hsl(210, 78%, 56%),hsl(146, 68%, 55%));
  border-radius: 2rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .4s;

  &:before {
      background-color: ${props => props.theme.bg.primary};
      border-radius: 2rem;
      content: "";
      position: absolute;
      width: 1.7rem;
      height: 1.7rem;
      top: 0.3rem;
      left: 0.3rem;
      transition: .4s;
    }
`;

const Switch = styled.label`
  border-radius: 1rem;
  display: inline-block;
  height: 2.2rem;
  margin-left: 1rem;
  position: relative;
  width: 4.5rem;

`;
const Checkbox = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  
  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196F3;
  }

  &:checked + ${Slider} {
    background: hsl(230, 22%, 74%);
    &:before {
      -webkit-transform: translateX(2rem);
      -ms-transform: translateX(2rem);
      transform: translateX(2rem);
      background-color: ${props => props.theme.text.secondary};
    }
  }
`;


export {
  Checkbox,
  DashboardInfo,
  Divider,
  HeaderContainer,
  ModeSwitcher,
  Slider,
  Switch,
  TotalFollowers,
  Title,
}
