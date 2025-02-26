import React from "react";
import checkmark from "../assets/checkmark.png";
export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <p className="text-center text-lg">Explore My</p>
      <h1 className="text-4xl text-center font-bold">Experience</h1>
      <div className="flex flex-col md:flex-row justify-center mt-8">
        <div className="flex flex-col items-center mx-4">
          <h2 className="text-2xl font-semibold">Frontend Development</h2>
          <div className="flex flex-wrap justify-center mt-4">
            <article className="flex items-center m-2">
              <img src={checkmark} alt="Checkmark" className="h-6 w-6" />
              <div className="ml-2">
                <h3>Dart</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article className="flex items-center m-2">
              <img src={checkmark} alt="Checkmark" className="h-6 w-6" />
              <div className="ml-2">
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article className="flex items-center m-2">
              <img src={checkmark} alt="Checkmark" className="h-6 w-6" />
              <div className="ml-2">
                <h3>SCSS</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article className="flex items-center m-2">
              <img src={checkmark} alt="Checkmark" className="h-6 w-6" />
              <div className="ml-2">
                <h3>JavaScript</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article className="flex items-center m-2">
              <img src={checkmark} alt="Checkmark" className="h-6 w-6" />
              <div className="ml-2">
                <h3>TypeScript</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
        <div className="flex flex-col items-center mx-4 mt-8 md:mt-0">
          <h2 className="text-2xl font-semibold">Relevant Skills/Frameworks</h2>
          <div className="flex flex-wrap justify-center mt-4">
            <article className="flex items-center m-2">
              <img src={checkmark} alt="Checkmark" className="h-6 w-6" />
              <div className="ml-2">
                <h3>GetX</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article className="flex items-center m-2">
              <img src={checkmark} alt="Checkmark" className="h-6 w-6" />
              <div className="ml-2">
                <h3>RestAPI</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article className="flex items-center m-2">
              <img src={checkmark} alt="Checkmark" className="h-6 w-6" />
              <div className="ml-2">
                <h3>jQuery</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article className="flex items-center m-2">
              <img src={checkmark} alt="Checkmark" className="h-6 w-6" />
              <div className="ml-2">
                <h3>Git</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article className="flex items-center m-2">
              <img src={checkmark} alt="Checkmark" className="h-6 w-6" />
              <div className="ml-2">
                <h3>PostgreSQL</h3>
                <p>Basic</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
