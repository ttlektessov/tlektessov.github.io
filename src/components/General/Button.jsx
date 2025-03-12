import { forwardRef } from "react";

const Button = forwardRef(({ className = "", children, ...props }, ref) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:cursor-pointer hover:bg-gray-700 active:bg-gray-800 ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
