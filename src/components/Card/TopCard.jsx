import React from 'react';
import {
  StyledArrow,
  StyledCardContainer,
  StyledFollowerQuantity,
  StyledFollowers,
  StyledFollowersText,
  StyledHeading,
  StyledIcon, StyledStatus,
  StyledCard,
} from './styles';

const TopCard = ({bg, iconSrc, iconAlt, username, followersQ, followersText, arrowSrc, arrowAlt, statusText, statusColor}) => {
  return (
    <StyledCardContainer background={bg}>
      <StyledCard>
        <StyledHeading>
          <StyledIcon src={iconSrc} alt={iconAlt} />
          <span>{username}</span>
        </StyledHeading>
        <StyledFollowers>
          <StyledFollowerQuantity>{followersQ}</StyledFollowerQuantity>
          <StyledFollowersText>{followersText}</StyledFollowersText>
        </StyledFollowers>
        <StyledStatus color={statusColor}>
          <StyledArrow src={arrowSrc} alt={arrowAlt} />
          <span>{statusText}</span>
        </StyledStatus>
      </StyledCard>
    </StyledCardContainer>
  );
};

export default TopCard;
