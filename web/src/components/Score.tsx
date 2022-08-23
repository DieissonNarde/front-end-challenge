import { SContainer, SContent, SRing } from "../styles/components/score";

interface ScoreProps {
  voteAverage: number;
}

export function Score({ voteAverage }: ScoreProps) {

  function convertToPercentage(voteAverage : number) {
    const percent = Math.floor((voteAverage / 10) * 100);
    return percent;
  }

  return (
    <SContainer>
      <SContent>
        <SRing>
          <span>{convertToPercentage(voteAverage)}%</span>
        </SRing>

        <span>Avaliação dos usuários</span>
      </SContent>
    </SContainer>
  )
}