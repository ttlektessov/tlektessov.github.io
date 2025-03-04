import { Construction } from "lucide-react";

export default function ContstructionContainer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <hr className="my-8 h-px w-full border-0 bg-gray-200"></hr>
      <Construction />
      <p className="h1 text-black">Under construction</p>
    </div>
  );
}
