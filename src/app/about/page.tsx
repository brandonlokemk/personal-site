import SkillBubbles from "../SkillBubbles";
import TechBubbles from "../TechBubbles";

export default function About() {
    return (
      <section id="about" className="min-h-screen pt-20 px-8 flex flex-col items-center" >
        <h1 className="text-4xl font-bold mb-6 dark:text-dark-accent1">About Me</h1>

        <h2 className="text-4xl font-bold mb-6">Intro</h2>
        <p className="text-lg mb-4">Hi! I&apos;m Brandon, a Software Engineer with a specialisation in Artificial Intelligence & Data Science and Analytics.</p>
        <h2 className="text-3xl font-bold mb-4">Programming languages</h2>
        <SkillBubbles/>
        <h2 className="text-3xl font-bold mb-4">Technologies and Frameworks</h2>
        <TechBubbles/>
        {/* <ul className="list-disc list-inside mb-4">
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
        <ul className="list-disc list-inside">
          <li>Certification 1</li>
          <li>Certification 2</li>
          <li>Certification 3</li>
        </ul> */}
      </section>
    );
  }
  