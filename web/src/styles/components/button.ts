import styled from "styled-components";

interface BContainerProps {
  bgColor: string;
  colorText: string;
}

export const BContainer = styled.button<BContainerProps>`
  height: fit-content;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
  text-align: center;

  color: ${(props) => props.colorText};
  background-color: ${(props) => props.bgColor};

  padding: .6rem 1.6rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const BContent = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  gap: .8rem;

  > svg {
    max-width: 1.667rem;
    height: auto;
    color: #FFFFFF;
  }
`;