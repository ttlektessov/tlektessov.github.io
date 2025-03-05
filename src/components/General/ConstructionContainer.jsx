import { Construction } from "lucide-react";

export default function ContstructionContainer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <hr className="my-8 h-px w-full border-0 bg-gray-200"></hr>
      <Construction color="#6b7280" />
      <p className="h1 text-center">
        Projects are
        <br />
        Under construction
      </p>
      <a
        href="https://www.figma.com/design/U7ccWBPLozqfdhxmXelDNe/Tlektessov-Temirlan-Portfolio?node-id=327-868&t=nsxElfABYr4vupQS-1"
        target="_blank"
        className="h3 mb-8"
      >
        Figma design
      </a>
    </div>
  );
}
