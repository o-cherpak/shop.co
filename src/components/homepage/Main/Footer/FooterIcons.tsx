import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FooterIcon } from "./FooterIcon";

export function FooterIcons() {
  return (
    <div className="flex gap-4 py-4 lg:py-0">
      <FooterIcon route="/" icon={faTwitter}/>
      <FooterIcon route="/" icon={faFacebook} className="bg-black" />
      <FooterIcon route="/" icon={faInstagram} />
      <FooterIcon route="/" icon={faGithub} />
    </div>
  );
}
