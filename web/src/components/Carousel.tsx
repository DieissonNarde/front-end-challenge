import { useEffect, useState } from "react";

import { CContainer, CContent, CItem } from "../styles/components/carousel";

import { Card } from "./Card";

export function Carousel() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('')
  //     .then((response) => response.json())
  //     .then(setData);
  // }, []);

  // if (!data || !data.length) return null;

  return (
    <CContainer>
      <CContent>
        <CItem>
          <Card />
        </CItem>
        <CItem>
          <Card />
        </CItem>
        <CItem>
          <Card />
        </CItem>
        <CItem>
          <Card />
        </CItem>
        <CItem>
          <Card />
        </CItem>
        <CItem>
          <Card />
        </CItem>
        
      </CContent>
    </CContainer>
  )
}