import styled from 'styled-components';

export const Container = styled.div`
background-color: #262626 !important;
position: fixed;
z-index: 2000 !important;
top: 0px !important;
right: 0px !important;
bottom: 0px !important;
left: 0px !important;
overflow-y: auto !important;
transform: translate3d(0px, 0px, 0px) !important;
`;

export const Button = styled.button`
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  font: 400 11px system-ui;
  background-color: inherit;
  border: none;
  font-size: 100%;
  &:focus {outline:0;};
`;
export const CloseButton = styled.div`
  line-height: 1.43;
  margin: 0;
  -webkit-font-smoothing: antialiased;

  background-color: inherit;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 32px;
  height: 32px;
  padding: 16px 28px 8px !important;
  `;

export const CloseSvg = styled.svg`
  cursor: pointer;
  height: 2em;
  width: 2em;
  display: block;
  fill: rgb(255, 255, 255);
  font-weight: 300;
  font-size: 90%;
  fill: rgb(255, 255, 255);
`;

export const Frame = styled.div`
  display: flex !important;
  width: 100% !important;
  height: 100% !important;
  flex-direction: column;
`;

export const TableRow = styled.div`
  display: table-row !important;
`;

export const HeaderDiv = styled.div`
  padding: 66px 15px 20px !important;
`;

export const ArrowAndImageContainer = styled.div`
  display: table-row !important;
  height: 100% !important;
`;

export const LeftArrowButton = styled.button`
  position: absolute !important;
  top: 0px !important;
  height: 100% !important;
  z-index: 3 !important;
  font-size: medium !important;
  width: 40px !important;
  left: 0px !important;
  background: none !important;
  border-width: 0px !important;
  border-style: initial !important;
  border-color: initial !important;
  border-image: initial !important;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  font: 400 11px system-ui;
  &:focus {outline:0;};
  padding: 1px 7px 2px;
`;

export const RightArrowButton = styled.button`
  position: absolute !important;
  top: 60px !important;
  height: 80% !important;
  z-index: 3 !important;
  font-size: medium !important;
  right: 0px !important;
  background: none !important;
  border-width: 0px !important;
  border-style: initial !important;
  border-color: initial !important;
  border-image: initial !important;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  font: 400 11px system-ui;
  &:focus {outline:0;};
  padding: 1px 7px 2px;
`;

export const PreviousSvg = styled.svg`
  cursor: pointer !important;
  height: 4.8em;
  width: 4.8em;
  fill: rgb(255, 255, 255);
`;

export const NextSvg = styled.svg`
  cursor: pointer !important;
  height: 4.8em;
  width: 4.8em;
  fill: rgb(255, 255, 255);
`;

export const CurrentPhotoFrame = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CurrentPhoto = styled.img`
  max-width: 100%;
  height: 470px;
  object-fit: cover;
  background-position: 50% 50%;
  background-size: cover;
`;