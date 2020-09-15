import styled from 'styled-components';

export const ListPhoto = styled.li`
  display: list-item;
  float: left !important;
  background-color: rgb(0, 0, 0) !important;
  margin-left: 10px !important;
  opacity: 0.5;
`;

export const ActivePhoto = styled(ListPhoto)`
  opacity: 1;
`;

export const ImageListButton = styled.button`
  backface-visibility: hidden !important;
  position: relative !important;
  display: inline-block !important;
  vertical-align: bottom !important;
  overflow: hidden !important;
  background: transparent !important;
  border-width: 0px !important;
  border-style: initial !important;
  border-color: initial !important;
  border-image: initial !important;
  margin: 0px !important;
  padding: 0px !important;
  -webkit-appearance: button;
  cursor: pointer;
`;

export const ImageListPhoto = styled.img`
  width: 100px !important;
  height: 67px !important;
`;