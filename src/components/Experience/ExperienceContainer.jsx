export default function ExperienceContainer({ expDetails }) {
  return (
    <>
      {/* <div className="flex-1 rounded-[2rem] border-[0.1rem] border-solid border-[#353535] p-[1.5rem]">
        <h2 className="mb-[2rem] text-center text-[1.75rem] font-semibold text-[rgb(85,85,85)]">
          {expDetails.title}
        </h2>
        <div className="flex flex-row flex-wrap justify-evenly gap-[2.5rem]">
          {expDetails.skills.map((skill, index) => (
            <article
              key={index}
              className="m-2 flex w-[10rem] items-center gap-[1.5rem]"
            >
              <img src={checkmark} alt="Checkmark" className="h-[2rem]" />
              <div>
                <h3 className="text-lg font-bold">{skill.name}</h3>
                <p>{skill.level}</p>
              </div>
            </article>
          ))}
        </div>
      </div> */}
    </>
  );
}
