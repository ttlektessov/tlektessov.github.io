import * as React from "react";
import * as DrawerPrimitive from "@radix-ui/react-dialog";

const Drawer = DrawerPrimitive.Root;
const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerClose = DrawerPrimitive.Close;
const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title ref={ref} className={className} {...props} />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const VisuallyHidden = React.forwardRef(({ children, ...props }, ref) => (
  <span
    ref={ref}
    className="absolute -m-px h-px w-px overflow-hidden border-0 p-0 whitespace-nowrap"
    {...props}
  >
    {children}
  </span>
));
VisuallyHidden.displayName = "VisuallyHidden";

const DrawerPortal = ({ className, ...props }) => (
  <DrawerPrimitive.Portal className={className} {...props} />
);
DrawerPortal.displayName = DrawerPrimitive.Portal.displayName;

const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    className={`fixed inset-0 z-50 bg-gray-900/10 opacity-100 backdrop-blur-sm ${className || ""}`}
    {...props}
    ref={ref}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef(
  ({ className, side = "right", children, ...props }, ref) => (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={`bg-gray-default fixed inset-y-0 z-50 shadow-2xl ring-1 ring-black/10 transition-all duration-100 ease-in-out ${
          side === "right" ? "right-0" : "left-0"
        } h-full w-full max-w-xs ${className || ""}`}
        {...props}
      >
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  ),
);
DrawerContent.displayName = DrawerPrimitive.Content.displayName;

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  VisuallyHidden,
};
