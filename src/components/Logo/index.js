import { Link, LogoImage } from "./Logo.styles";
import { VisuallyHidden } from "../VisuallyHidden";

export function Logo() {
  return (
    <Link href="/">
      <VisuallyHidden>Home</VisuallyHidden>
      <LogoImage
        src={`${process.env.PUBLIC_URL}/assets/branding/monkii-logo.png`}
        alt="monkii logo"
      />
    </Link>
  );
}
