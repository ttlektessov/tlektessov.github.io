import Container from "../General/Container";
import SectionTag from "../General/SectionTag";
import { images } from "../../assets";
export default function About() {
  return (
    <Container id="about" className="bg-gray-50">
      <div className="self-center">
        <SectionTag label="About Me" />
      </div>
      <div className="flex w-full flex-col justify-evenly md:flex-row">
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[320px] w-[260px] md:h-[380px] md:w-[300px] lg:h-[480px] lg:w-[400px]">
            <img
              src={images.aboutPic}
              alt="Profile picture"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="flex max-w-xl flex-col gap-6">
          <h3 className="h3">Constantly changing.</h3>
          <p className="body3">
            I&apos;m a recent grad with a degree in Computer Science &
            Engineering and International Studies from Korea University. My
            journey as a web developer began at NODAMEN, where I was responsible
            for the development, optimization, and bug fixing of web services.
            These web services showcased digital exhibitions curated by staff,
            allowing users to enjoy 4K digital artworks on PCs, mobile devices,
            and TVs.
          </p>
          <p className="body3">
            I was also a Flutter developer responsible for developing web admin
            page for the content curation on mobile application, as well as
            development, optimizing & bug fixing of the mobile application.
          </p>
          <p className="body3">
            My goal is to continually expand my abilities in front-end
            development and create impactful user experiences. You can see the
            projects I&apos;ve worked on in the &quot;Projects&quot; section!
          </p>
          <p className="body3">Finally, some quick bits about me.</p>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <li className="body3">B.E. in Computer Science & Engineering</li>
              <li className="body3">FC Barcelona fan since 2013</li>
            </ul>

            <ul className="flex list-inside list-disc flex-col gap-2">
              <li className="body3">
                Double Majored in International Studies{" "}
              </li>
              <li className="body3">Video games lover</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
