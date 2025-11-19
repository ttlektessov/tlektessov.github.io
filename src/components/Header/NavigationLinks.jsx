import { useTranslation } from "react-i18next";
import { useLenis } from "lenis/react";

// eslint-disable-next-line react/prop-types
export default function NavigationLinks({ isMobile = false, onLinkClick }) {
  const { t } = useTranslation();

  const lenis = useLenis();

  const NAV_LINKS = [
    { label: t("about"), href: "#about" },
    { label: t("skills"), href: "#skills" },
    { label: t("experience"), href: "#experience" },
    { label: t("projects"), href: "#projects" },
    { label: t("contact"), href: "#contact" },
  ];
  const handleScroll = (href) => {
    if (lenis) {
      lenis.scrollTo(href, { offset: 0, duration: 1.2 });
    } else {
      window.location.href = href;
    }
  };

  if (isMobile) {
    return (
      <ul className="flex list-none flex-col gap-4">
        {NAV_LINKS.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const timeoutId = setTimeout(() => {
                  handleScroll(link.href);
                  onLinkClick && onLinkClick();
                  clearTimeout(timeoutId);
                }, 500);
              }}
              className="body2 block hover:cursor-pointer"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex list-none items-center gap-6">
      {NAV_LINKS.map((link, index) => (
        <li key={index}>
          <a
            onClick={(e) => {
              e.preventDefault;
              handleScroll(link.href);
            }}
            className="body2 hover:cursor-pointer"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
