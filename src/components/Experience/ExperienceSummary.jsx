/* eslint-disable react/prop-types */
export default function ExperienceSummary({ summaryPoints }) {
  if (!summaryPoints || !summaryPoints.length) return null;

  return (
    <ul className="flex list-disc flex-col gap-2 md:gap-1">
      {summaryPoints.map((sentence, index) => (
        <li key={index} className="body3">
          {sentence}
        </li>
      ))}
    </ul>
  );
}
