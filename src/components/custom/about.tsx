import SkillItem from "@/components/custom/SkillItem";

const skillsData = [
  { name: "HTML", imgSrc: "/icons/html.png", altText: "HTML" },
  { name: "CSS", imgSrc: "/icons/css.png", altText: "CSS" },
  { name: "JavaScript", imgSrc: "/icons/javascript.png", altText: "JavaScript" },
  { name: "React", imgSrc: "/icons/react.png", altText: "React" },
  { name: "Tailwind CSS", imgSrc: "/icons/tailwind.svg", altText: "Tailwind" },
  { name: "Bootstrap", imgSrc: "/icons/bootstrap.png", altText: "Bootstrap" },
  { name: "Git", imgSrc: "/icons/git.png", altText: "Git" },
  { name: "Figma", imgSrc: "/icons/figma.png", altText: "Figma" },
  { name: "Java", imgSrc: "/icons/java.png", altText: "Java" },
  { name: "Python", imgSrc: "/icons/python.png", altText: "Python" },
  { name: "TypeScript", imgSrc: "/icons/typescript.png", altText: "TypeScript" },
];
const About = () => {
  return (
    <section className="bg-black px-4 py-16">
      <div className="container mx-auto max-w-screen-xl">
        <div className="mb-8 rounded-lg bg-zinc-900/50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">About Me</h2>
          <div className="text-gray-300">
            <p className="mb-2">
              Hello! I'm Emanuel Ramos Paiva, A Passionate Programming Student
              Currently Pursuing A Degree In Systems Analysis And Development
              (TADS).
            </p>
            <p className="mb-2">
              I'm Currently In My 3rd Semester, Where I'm Deepening My Knowledge
              In Software Development, System Analysis, And Database Management.
            </p>
            <p className="mb-2">
              I Enjoy Solving Problems Through Code And I'm Constantly Looking
              For Ways To Improve My Skills.
            </p>
            <p className="mb-2">
              I'm Highly Motivated To Work On Real-World Projects And
              Collaborate With Teams That Are As Passionate About Technology As
              I Am.
            </p>
            <p>
              In My Free Time, I Enjoy Learning New Technologies, Participating
              In Coding Challenges, And Expanding My Knowledge In Web And
              Software Development.
            </p>
          </div>
        </div>

        <div className="mb-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg bg-zinc-900/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">Education</h3>
            <div className="text-gray-300">
              <p className="font-medium">
                • [Integrado] — Technology in Systems Analysis and Development
              </p>
              <p className="text-sm">
                3rd semester · Expected graduation: 2026
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-zinc-900/50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Certifications & Courses
            </h3>
            <div className="text-gray-300">
              <p className="font-medium">
                • Python Journey — Hashtag Treinamentos
              </p>
              <p className="text-sm">Completed in January 2023 · 8 hours</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-zinc-900/50 p-6">
          <h3 className="mb-6 text-xl font-semibold text-white">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11">
            {skillsData.map((skill) => (
              <SkillItem
                key={skill.name}
                imgSrc={skill.imgSrc}
                altText={skill.altText}
                name={skill.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
