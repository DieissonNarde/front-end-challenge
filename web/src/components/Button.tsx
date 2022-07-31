import { ReactNode, useState } from "react";
import { BContainer, BContent } from "../styles/components/button";


interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  const [selectedButton, setSelectedButton] = useState(false);

  function handleSelectButton() {
    if (selectedButton) {
      return setSelectedButton(false);
    }

    return setSelectedButton(true);
  }

  return (
    <>
      {selectedButton ? (
        <BContainer
          bgColor={'var(--selected-button)'}
          colorText={'#FFFFFF'}
          onClick={handleSelectButton}
        >
          <BContent>
            {children}
            <img src="/svg/close-circle.svg" />
          </BContent>
        </BContainer>
      ) : (
        <BContainer
          bgColor={'#FFFFFF'}
          colorText={'var(--text-button)'}
          onClick={handleSelectButton}
        >
          {children}
        </BContainer>
      )}
    </>
  )
}