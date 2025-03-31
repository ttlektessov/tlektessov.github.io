import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
export default function NavigationLinks({ isMobile = false, onLinkClick }) {
  const { t } = useTranslation();

  const NAV_LINKS = [
    { label: t("about"), href: "#about" },
    { label: t("skills"), href: "#skills" },
    { label: t("experience"), href: "#experience" },
    { label: t("projects"), href: "#projects" },
    { label: t("contact"), href: "#contact" },
  ];

  if (isMobile) {
    return (
      <ul className="flex list-none flex-col gap-4">
        {NAV_LINKS.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              onClick={() => {
                const timeoutId = setTimeout(() => {
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
            onClick={() => (window.location.href = link.href)}
            className="body2 hover:cursor-pointer"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
