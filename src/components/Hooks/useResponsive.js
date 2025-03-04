import useWindowSize from "./use-windows-size";

export function useResponsive() {
  const size = useWindowSize();

  return {
    isMobile: !(size.width && size.width >= 768),
    isTablet: size.width && size.width >= 768 && size.width < 1024,
    isDesktop: size.width && size.width >= 1024,
  };
}
