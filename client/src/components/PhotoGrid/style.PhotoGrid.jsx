import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 15.5vw);
  width: 100%;
  background-color: #ffffff;
  justify-content: space-between;
  padding: 2%;
  &:hover div {
    opacity: 0.5;
  }
`;

export const MainPhoto = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  border: solid 4.5px #ffffff;
  border-radius: 16px 0px 0px 16px;
  overflow: hidden;
  ${Grid}:hover &:hover {
    opacity: 1;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  &:hover {
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transform: scale(1.05);
    opacity: 1;
  }
`;

export const GridPhoto2 = styled.div`
  grid-column_start: 3,
  grid-column-end: 4,
  grid-row-start: 1;
  grid-row-end: 2;
  border: solid 4.5px #ffffff;
  overflow: hidden;
  ${Grid}:hover &:hover {
    opacity: 1;
  }
`;

export const GridPhoto3 = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  border: solid 4.5px #ffffff;
  overflow: hidden;
  ${Grid}:hover &:hover {
    opacity: 1;
  }
`;

export const GridPhoto4 = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  border: solid 4.5px #ffffff;
  border-radius: 0px 16px 0px 0px;
  overflow: hidden;
  ${Grid}:hover &:hover {
    opacity: 1;
  }
`;

export const GridPhoto5 = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  border: solid 4.5px #ffffff;
  border-radius: 0px 0px 16px 0px;
  overflow: hidden;
  ${Grid}:hover &:hover {
    opacity: 1;
  }
`;