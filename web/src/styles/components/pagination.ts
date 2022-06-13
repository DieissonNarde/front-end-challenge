import styled from 'styled-components';

interface PItemProps {
  selected?: boolean;
  disabled?: boolean;
}

interface PArrowIconProps {
  type: string;
}


export const PContainer = styled.ul`
  display: flex;
  list-style-type: none;
  gap: .4rem;
`;


export const PItem = styled.li<PItemProps>`
  box-sizing: border-box;
  min-width: 3.4rem;
  height: 3.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  /* padding: 0 1.2rem; */
  
  border-radius: 50%;
  
  color: #5C16C5;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;
  letter-spacing: 0.01071em;

  background-color: ${(props) => props.selected ? 'rgba(0, 0, 0, 0.08)' : 'transparent'};
  pointer-events: ${(props) => props.disabled && 'none'};

  :hover {
    background-color: ${(props) => props.disabled ? 'transparent' : 'rgba(0, 0, 0, 0.08)'};
    cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
  }
`;


export const ArrowIcon = styled.div<PArrowIconProps>`
  &::before {
    position: relative;
    /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
    content: '';
    /* By using an em scale, the arrows will size with the font */
    display: inline-block;
    width: .8rem;
    height: .8rem;
    border-right: .2rem solid #5C16C5;
    border-top: .2rem solid #5C16C5;
  }

  transform: ${({ type }) => type === 'left' && 'rotate(-135deg)'};
  transform: ${({ type }) => type === 'right' && 'rotate(45deg)'};
`;
