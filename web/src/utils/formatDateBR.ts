
interface FormatDateProps {
  releaseDate: string;
  textMonth: boolean;
}

export function formatDateBR({ releaseDate, textMonth }: FormatDateProps) {
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const date = new Date(releaseDate);

  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();

  if(textMonth) {
    const month = months[(date.getMonth())];

    return `${day} ${month} ${year}`;
  } else {
    const month = (date.getMonth()+1).toString().padStart(2, '0');

    return `${day}/${month}/${year}`;
  }
}