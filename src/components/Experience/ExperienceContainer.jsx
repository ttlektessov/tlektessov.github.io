import checkmark from "../../assets/checkmark.png";
export default function ExperienceContainer({ expDetails }) {
  return (
    <>
      <div className="p-[1.5rem] flex-1 border-[#353535] border-solid rounded-[2rem] border-[0.1rem] ">
        <h2 className="text-[1.75rem] text-[rgb(85,85,85)] font-semibold text-center mb-[2rem]">
          {expDetails.title}
        </h2>
        <div className="flex flex-wrap gap-[2.5rem] flex-row justify-evenly">
          {expDetails.skills.map((skill, index) => (
            <article
              key={index}
              className="flex items-center m-2 w-[10rem] gap-[1.5rem]"
            >
              <img src={checkmark} alt="Checkmark" className="h-[2rem]" />
              <div>
                <h3 className="font-bold text-lg">{skill.name}</h3>
                <p>{skill.level}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
