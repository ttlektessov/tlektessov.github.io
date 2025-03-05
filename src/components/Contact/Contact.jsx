import Container from "../General/Container";
import SectionTag from "../General/SectionTag";
import { Mail, Copy } from "lucide-react";
import IconButton from "../General/IconButton";
import useWindowSize from "../Hooks/use-windows-size";
import { useState } from "react";
import SocialIcons from "../General/SocialIcons";

let email = "ttlektessov@gmail.com";

export default function Contact({ darkMode }) {
  const width = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };
  return (
    <>
      <Container id="contact" className="bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="self-cent">
            <SectionTag label="Get in Touch" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 md:gap-12">
          <div className="flex flex-col items-center md:gap-4">
            <div className="flex items-center gap-4 md:gap-5">
              <Mail
                color={darkMode === "dark" ? "#ffffff" : ""}
                className="h-6 w-6 md:h-8 md:w-8"
              />
              <p className="h2">{email}</p>
              <IconButton
                size={width && width < 768 ? "md" : "lg"}
                onClick={() => handleCopyClick(email, "email")}
                showTooltip={isCopied}
                tooltipText="Copied!"
              >
                <Copy />
              </IconButton>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="body3 text-center">You can also find me here!</p>
            <SocialIcons />
          </div>
        </div>
      </Container>
    </>
  );
}
