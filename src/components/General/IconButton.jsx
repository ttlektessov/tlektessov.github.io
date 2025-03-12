import { forwardRef } from "react";
// add memo to prevent re-render
const IconButton = forwardRef(
  (
    {
      className = "",
      size = "md",
      showTooltip = false,
      tooltipText = "",
      children,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "hover:cursor-pointer flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200";
    const iconClasses = "[&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700";
    const sizeClasses = {
      md: "[&_svg]:w-6 [&_svg]:h-6",
      lg: "[&_svg]:w-8 [&_svg]:h-8",
    };

    const buttonClasses = `relative ${baseClasses} ${iconClasses} ${sizeClasses[size]} ${className}`;

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
        {showTooltip && tooltipText.length > 0 && (
          <span className="body3 absolute -top-8 rounded-lg bg-gray-200 px-2 py-1 text-sm">
            {tooltipText}
          </span>
        )}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";

export default IconButton;
