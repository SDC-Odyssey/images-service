import styled from 'styled-components';


// Container, OuterContainer, DescriptionContainer, DescriptionList, DescriptionListItem, StarSvg, Rating, ReviewCount, SuperHostSvg, SuperHostText, Location, ShareSvg, ShareText, HeartSvg, SaveText
export const Container = styled.div`
  background-color: transparent !important;
  color: rgb(255,255,255) !important;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  -webkit-box-align: baseline !important;
  align-items: baseline !important;
  display: flex !important;
  flex-wrap: wrap !important;
  margin-top: 4px !important;
  line-height: 20px !important;
  letter-spacing: 0.3px;
  -webkit-font-smoothing: antialiased;
`;

export const OuterContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const DescriptionContainer = styled.div`
  padding: 0 18px;
`;

export const DescriptionList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 18px;
  list-style-type: none;
  margin-bottom: 0;
  box-sizing: border-box;
`;

export const ReviewsContainer = styled.span`
  -webkit-box-align: center !important;
  display: inline-flex !important;
  min-width: 0px !important;
  box-sizing: border-box;
`;

export const DescriptionListItem = styled.li`
  margin-top: 4px;
  padding-bottom: 12px;
  align-items: center;
`;

export const StarSvg = styled.svg`
  height: 1.43em;
  width: 1.43em;
  fill: rgb(255, 90, 95);
`;

export const Rating = styled.p`
  color: #333333 !important;
  font-weight: semi-bold;
`;

export const ReviewCount = styled.p`
  color: #dedede !important;
  font-weight: extra-light;
`;

//style="fill: currentcolor;"
export const SuperHostSvg = styled.svg`
  display: block;
  height: 1em;
  width: 1em;
  fill: rgb(255, 90, 95);
`;

export const SuperHostText = styled.p`
  color: #dedede !important;
  font-weight: extra-light;
`;

export const Location = styled.p`
  text-decoration: underline;
  color: #717171 !important;
  font-size: 14px !important;
  font-weight: regular;
  line-height: 20px;
`;

//stroke: currentcolor;
export const ShareSvg = styled.svg`
  color: #484848 !important;
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: #484848;
  stroke-width: 2;
  overflow: visible;
`;

export const ShareText = styled.p`
  text-decoration: underline;
  color: #484848 !important;
`;

//style="stroke: currentcolor;"
export const HeartSvg = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: #484848 !important;
  stroke-width: 2;
  overflow: visible;
`;

export const SaveText = styled.p`
  text-decoration: underline;
  color: #484848 !important;
`;

// margin: 1em;
//padding: 0.25em 1em;