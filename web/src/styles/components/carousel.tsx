import styled from 'styled-components';


export const CContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CContent = styled.div`
  display: flex;
  height: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1.6rem;
  margin-top: 1rem;
`;

export const CItem = styled.div`
  height: 33.6rem;
  padding: .8rem;
  flex: none;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-bottom: 2.6rem;
`;
