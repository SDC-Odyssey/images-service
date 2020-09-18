import styled from 'styled-components';


// Container, OuterContainer, DescriptionContainer, DescriptionList, DescriptionListItem, StarSvg, Rating, ReviewCount, SuperHostSvg, SuperHostText, Location, ShareSvg, ShareText, HeartSvg, SaveText
export const Container = styled.div`
  background-color: transparent !important;
  color: rgb(255,255,255) !important;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  -webkit-box-align: baseline !important;
  display: flex !important;
  flex-wrap: wrap !important;
  line-height: 20px !important;
  letter-spacing: 0.3px;
  -webkit-font-smoothing: antialiased;
`;

export const OuterContainer = styled.div`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const DescriptionList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 28px 0px 0px 0px;
  width: 100%;
  list-style-type: none;
  margin-bottom: 0;
  box-sizing: border-box;
`;

export const LeftContainer = styled.span`
  -webkit-box-align: center !important;
  display: inline-flex !important;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const DescriptionListItem = styled.li`
  margin-top: 4px;
  padding-bottom: 12px;
  align-items: center;
`;

export const ReviewsContainer = styled.span`
  -webkit-box-align: baseline !important;
  display: inline-flex !important;
  min-width: 0px !important;
  box-sizing: border-box;
  justify-content: space-between;
  margin: 0 9px 0 0;
`;

export const StarSvg = styled.svg`
  height: 1.43em;
  width: 1.43em;
  padding: 0px 4px .25px 0px;
  fill: rgb(255, 90, 95);
`;

export const Rating = styled.p`
  color: #333333 !important;
  font-weight: bold;
  font-size: 14px !important;
  padding: 0px 4px 0px 0px;
`;

export const ReviewCount = styled.p`
  color: #737373 !important;
  font-weight: extra-light;
  font-size: 14px !important;
`;

export const SuperhostContainer = styled.span`
  -webkit-box-align: center !important;
  display: inline-flex !important;
  min-width: 0px !important;
  box-sizing: border-box;
  justify-content: space-between;
  margin: 0 9px 0 0;
`;

//style="fill: currentcolor;"
export const SuperHostSvg = styled.svg`
  display: block;
  height: 1em;
  width: 1em;
  fill: rgb(255, 90, 95);
  margin: 0 .5px 0 0;
`;

export const SuperHostText = styled.p`
  color: #737373 !important;
  font-weight: extra-light;
`;

export const Location = styled.p`
  text-decoration: underline;
  color: #737373 !important;
  font-size: 14px !important;
  font-weight: bold;
  line-height: 20px;
`;

export const RightContainer = styled.span`
  -webkit-box-align: center !important;
  display: inline-flex !important;
  min-width: 0px !important;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const ShareContainer = styled.span`
  -webkit-box-align: center !important;
  display: inline-flex !important;
  min-width: 0px !important;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const ShareSvg = styled.svg`
  color: #484848 !important;
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: #484848;
  stroke-width: 2;
  overflow: visible;
  margin: 0 5px 0 0;
`;

export const ShareText = styled.p`
  text-decoration: underline;
  color: #484848 !important;
  margin: 0 18px 0 0;
`;

export const SaveContainer = styled.span`
  -webkit-box-align: center !important;
  display: inline-flex !important;
  min-width: 0px !important;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const HeartSvg = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: #484848 !important;
  stroke-width: 2;
  overflow: visible;
  margin: 0 5px 0 0;
`;

export const SaveText = styled.p`
  text-decoration: underline;
  color: #484848 !important;
`;

export const Dot = styled.p`
  color: #717171 !important;
  font-size: 10px !important;
  font-weight: extra-light;
  margin: 0 9px 0 0;
`;

// margin: 1em;
//padding: 0.25em 1em;