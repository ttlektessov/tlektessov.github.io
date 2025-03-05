import Card from "../General/Card";

const Experiences = [
  {
    organization: "NODAMEN",
    position: "Frontend & Mobile Developer",
    startDate: new Date(2023, 5),
    endDate: new Date(2024, 9),
    summary: [
      "Developed membership, personalized content, and personal pages using HTML, CSS, JS, and jQuery, improving overall website functionality and user engagement by over 30%.",
      "Successfully integrated RESTful APIs into the front-end, enabling dynamic content delivery and realtime updates for membership subscriptions and personalized content.",
      "Collaborated with the QC/QA team to identify and fix front-end bugs, ensuring a seamless user experience and reducing error rates by 54%.",
      "Developed a responsive and dynamic admin page using Flutter, implementing efficient user interfaces and robust back-end integration to manage administrative tasks seamlessly",
    ],
  },
  {
    organization: "Embassy of Kazakhstan in Korea",
    position: "IT Support",
    startDate: new Date(2020, 7),
    endDate: new Date(2021, 12),
    summary: [
      "Provided diagnostics and maintenance for personnel electronic devices, and assisted in the digitization of embassy services, enhancing operational efficiency and user accessibility",
      "Developed a Telegram bot that enabled users to communicate and receive support from the embassy, facilitating over 200 user interactions each month and improving response times by 35%.",
    ],
  },
  {
    organization: "Sejong University",
    position: "Teaching Assistant",
    startDate: new Date(2020, 9),
    endDate: new Date(2020, 12),
    summary: [
      "Provided teaching assistance for the Advanced C Programming course, supporting the instructor and enhancing student understanding and performance.",
      "Updated weekly labs for 30 students (8 Labs in total)",
      "Planned and supervised midterm, final, and qualification exams, ensuring smooth execution and adherence to academic standards, resulting in a 15% improvement in student performance.",
    ],
  },
];
export default function ExperienceContainer() {
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
            <p className="subtitle mb-2 font-semibold">{exp.organization}</p>
            <p className="body2">
              Seoul,
              <br />
              South Korea
            </p>
          </div>
          <div className="flex flex-col gap-4 max-md:order-3 md:w-3/4">
            <p className="subtitle font-semibold text-gray-900">
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
              {exp.startDate.toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
              {" - "}
              {exp.endDate.toLocaleDateString("en-US", {
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
