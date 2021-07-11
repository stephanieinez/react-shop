import { Logo } from "../Logo";
import { ShoppingCartIcon } from "../ShoppingCartIcon";
import { Wrapper, IconWrapper } from "./Header.styles";

export function Header() {
  return (
    <Wrapper>
      <IconWrapper>
        <Logo />
        <ShoppingCartIcon />
      </IconWrapper>
    </Wrapper>
  );
}
