import Link from "next/link";
import { HContainer, HContent } from "../styles/components/header";

export function Header() {

  return (
    <HContainer>
      <HContent>
        <Link href="/">
          <a>
            <img src="/svg/logo.svg" alt="Logo TMDB" />
          </a>
        </Link>
      </HContent>
    </HContainer>
  )
}