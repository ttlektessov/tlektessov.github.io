import IconButton from "../General/IconButton";
import { images } from "../../assets";
export default function SocialIcons() {
  return (
    <div className="flex gap-1">
      <IconButton
        onClick={() => window.open("https://github.com/ttlektessov", "_blank")}
      >
        <img
          src={images.LogoGithub}
          alt="GitHub"
          width="24"
          height="24"
          className="dark:invert"
        />
      </IconButton>
      <IconButton
        onClick={() =>
          window.open("https://linkedin.com/in/tlektessov", "_blank")
        }
      >
        <img
          src={images.LogoLinkedin}
          alt="LinkedIn"
          width="24"
          height="24"
          className="dark:invert"
        />
      </IconButton>
    </div>
  );
}
