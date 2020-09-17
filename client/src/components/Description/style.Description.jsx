import styled from 'styled-components';

//Container, TableRow, RatingsContainer, StarSvg, Rating, ReviewCount, SuperHostContainer, SuperHostSvg, SuperHostText, Location, ShareSvg, ShareText, HeartSvg, SaveText

export const Container = styled.div`
  display: table-row !important;
`;

export const TableRow = styled.div`
  display: table-row !important;
`;

export const RatingsContainer = styled.div`
  display: table-row !important;
  height: 100% !important;
`;

export const StarSvg = styled.svg`
  height: 1.43em;
  width: 1.43em;
  fill: rgb(255, 90, 95);
`;

export const Rating = styled.p`
  fill: rgb(51,51,51);
  font-weight: semi-bold;
`;

export const ReviewCount = styled.p`
  color: #dedede !important;
  font-weight: extra-light;
`;

export const SuperHostContainer = styled.div`
  display: table-row !important;
  height: 100% !important;
`;

//style="height: 1em; width: 1em; display: block; fill: currentcolor;"
export const SuperHostSvg = styled.svg`
  height: 1.5em;
  width: 1.5em;
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

//style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;"
export const ShareSvg = styled.svg`
  color: #484848 !important;
`;

export const ShareText = styled.p`
  text-decoration: underline;
  color: #484848 !important;
`;

//style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;"
export const HeartSvg = styled.svg`
  color: #484848 !important;
`;

export const SaveText = styled.p`
  text-decoration: underline;
  color: #484848 !important;
`;