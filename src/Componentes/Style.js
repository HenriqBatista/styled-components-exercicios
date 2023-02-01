import styled from "styled-components";

export const AppHeader = styled.header`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;
`;

export const AppMain = styled.main`
  min-height: 80%;
  display: flex;
`;

export const AppNav = styled.nav`
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
`;

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const AppFooter = styled.footer`
  background: black;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;
`;

export const AppPainel = styled.section`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
`;
