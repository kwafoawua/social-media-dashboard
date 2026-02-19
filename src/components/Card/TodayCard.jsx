import {
  StyledArrow,
  StyledFollowerQuantity,
  StyledFollowers,
  StyledHeading,
  StyledIcon,
  StyledOverviewCard,
  StyledStatus,
} from './styles';

const TodayCard = ({
  title,
  iconSrc,
  iconAlt,
  followersQ,
  arrowSrc,
  arrowAlt,
  statusText,
  statusColor,
}) => {
  return (
    <StyledOverviewCard>
      <StyledHeading>
        <span>{title}</span>
        <StyledIcon src={iconSrc} alt={iconAlt} />
      </StyledHeading>
      <StyledFollowers>
        <StyledFollowerQuantity>{followersQ}</StyledFollowerQuantity>
        <StyledStatus statusColor={statusColor}>
          <StyledArrow src={arrowSrc} alt={arrowAlt} />
          <span>{statusText}</span>
        </StyledStatus>
      </StyledFollowers>
    </StyledOverviewCard>
  );
};

export default TodayCard;
