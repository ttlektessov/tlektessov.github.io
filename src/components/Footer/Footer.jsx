import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-default w-full py-6">
      <div className="flex items-center justify-center gap-1">
        <p className="body3 flex items-center">
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()} | Yep, done by me, Temirlan Tlektessov.
        </p>
      </div>
    </footer>
  );
}
