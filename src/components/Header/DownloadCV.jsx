import Button from "../General/Button";
import { documents } from "../../assets";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
export default function DownloadCV({ className = "" }) {
  const { t } = useTranslation();

  return (
    <Button className={className} onClick={() => window.open(documents.resume)}>
      {t("download_cv")}
    </Button>
  );
}
