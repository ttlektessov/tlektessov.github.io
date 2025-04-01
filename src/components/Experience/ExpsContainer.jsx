import Card from "../General/Card";
import { useTranslation } from "react-i18next";
// import { useState } from "react";
export default function ExperienceContainer() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language || "en-US";
  const Experiences = [
    {
      organization: t("org.nodamen_title"),
      position: t("org.nodamen_position"),
      startDate: new Date(2023, 4),
      endDate: new Date(2024, 8),
      summary: t("org.nodamen_summary", { returnObjects: true }),
    },
    {
      organization: t("org.embassy_title"),
      position: t("org.embassy_position"),
      startDate: new Date(2020, 6),
      endDate: new Date(2021, 11),
      summary: t("org.embassy_summary", { returnObjects: true }),
    },
    {
      organization: t("org.sejong_title"),
      position: t("org.sejong_position"),
      startDate: new Date(2020, 8),
      endDate: new Date(2020, 11),
      summary: t("org.sejong_summary", { returnObjects: true }),
    },
  ];
  return (
    <>
      {Experiences.map((exp, index) => (
        <Card
          key={index}
          className={
            "mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8"
          }
        >
          <div className="flex flex-col max-md:order-1 md:w-1/4">
            <p className="subtitle mb-2 font-semibold italic">
              {exp.organization}
            </p>
            <p className="body3">{t("south_korea")}</p>
          </div>
          <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
            <p className="subtitle font-semibold text-gray-900 underline">
              {exp.position}
            </p>
            <ul className="flex list-disc flex-col gap-2 md:gap-1">
              {exp.summary?.map((sentence, index) => (
                <li key={index} className="body3">
                  {sentence}
                </li>
              ))}
            </ul>
          </div>
          <div className="max-md:order-2 md:w-1/4">
            <p className="body3 text-gray-700 md:text-right">
              {exp.startDate.toLocaleDateString(lang, {
                month: "short",
                year: "numeric",
              })}
              {" - "}
              {exp.endDate.toLocaleDateString(lang, {
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </Card>
      ))}
    </>
  );
}
