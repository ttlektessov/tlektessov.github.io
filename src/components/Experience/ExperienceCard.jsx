/* eslint-disable react/prop-types */
import Card from "../General/Card";
import { useTranslation } from "react-i18next";
import ExperienceSummary from "./ExperienceSummary";
import useDateFormatter from "../Hooks/useDateFormatter";

export default function ExperienceCard({ experience }) {
  const { t } = useTranslation();
  const formatDate = useDateFormatter();

  const { organization, position, startDate, endDate, summary } = experience;

  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
      <div className="flex flex-col max-md:order-1 md:w-1/4">
        <p className="subtitle mb-2 font-semibold italic">{organization}</p>
        <p className="body3">{t("south_korea")}</p>
      </div>

      <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
        <p className="subtitle font-semibold text-gray-900 underline">
          {position}
        </p>
        <ExperienceSummary summaryPoints={summary} />
      </div>

      <div className="max-md:order-2 md:w-1/4">
        <p className="body3 text-gray-700 md:text-right">
          {formatDate(startDate)} - {formatDate(endDate)}
        </p>
      </div>
    </Card>
  );
}
