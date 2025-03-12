import SectionTag from "../General/SectionTag";
import Container from "../General/Container";
import ExpsContainer from "./ExpsContainer";

export default function Experience() {
  return (
    <>
      <Container id="experience" className="bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <SectionTag label="Experience" />
          </div>
          <p className="subtitle max-w-xl text-center">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        <ExpsContainer />
      </Container>
    </>
  );
}
